import { useState, useEffect } from 'react';

interface UseFetchResult {
  data: any | null;
  isPending: boolean;
  error: any | null;
}

const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<any | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Error fetching users data');
        }
        const result = await res.json(); // ← this is your "data"
        setData(result);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchData(); // Call the async function
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
