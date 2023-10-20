import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

function usePersistedState<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const readValue = useCallback((): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: SetStateAction<T>): void => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
    dispatchEvent(new Event('storage'));
  };

  const onStorageChangeHandler = useCallback(
    (event: StorageEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent)?.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue],
  );

  useEffect(() => {
    setStoredValue(readValue());
    addEventListener('storage', onStorageChangeHandler);

    return () => {
      removeEventListener('storage', onStorageChangeHandler);
    };
  }, [readValue, onStorageChangeHandler]);

  return [storedValue, setValue];
}

export default usePersistedState;
