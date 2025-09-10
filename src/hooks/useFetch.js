import { useCallback, useEffect, useState } from "react";

/**
 * useFetch(url)
 * returns: { data, loading, error, refetch }
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  const fetchNow = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("useFetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchNow();
  }, [fetchNow]);

  return { data, loading, error, refetch: fetchNow };
}
