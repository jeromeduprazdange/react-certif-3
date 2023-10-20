import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;
type StorageKey = string;

const usePersistedState = <T>(key: StorageKey, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  });

  const setPersistedValue: SetValue<T> = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent): void => {
      if (event.storageArea === window.localStorage && event.key === key) {
        setStoredValue(event.newValue ? (JSON.parse(event.newValue) as T) : initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setPersistedValue];
};

export default usePersistedState;
