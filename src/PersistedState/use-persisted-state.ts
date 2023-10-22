import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

function usePersistedState<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const getValue = useCallback((): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(getValue);

  const setValue = (value: SetStateAction<T>): void => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
    dispatchEvent(new Event('storage'));
  };

  useEffect(() => {
    const onStorageChangeHandler = (event: StorageEvent): void => {
      if ((event as StorageEvent)?.key && (event as StorageEvent)?.key !== key) {
        return;
      }
      setStoredValue(getValue());
    };

    setStoredValue(getValue());
    addEventListener('storage', onStorageChangeHandler);

    return () => {
      removeEventListener('storage', onStorageChangeHandler);
    };
  }, [key, getValue]);

  return [storedValue, setValue];
}

export default usePersistedState;
