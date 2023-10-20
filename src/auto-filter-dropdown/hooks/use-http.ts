import { useEffect, useState } from 'react';

const useHttp = <T>(url: string): [T | null, boolean] => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData: T = await response.json();
          setData(jsonData);
        } else {
          console.error('Error retrieving data');
          setError(true);
        }
      } catch (error) {
        console.error('Error:', error);
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  return [data, error];
};

export default useHttp;
