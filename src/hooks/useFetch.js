import { useEffect, useState } from "react";

const useFetch = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [iserror, setIserror] = useState("");

  const fetchData = async (url, config) => {
    setLoading(true);
    try {
      const res = await fetch(url, config);
      const json = await res.json();
      if (res.ok) {
        setLoading(false);
        setIserror("");
        setData(json);
      }
    } catch (err) {
      setIserror(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url, config);
  }, [url]);

  return { data, loading, iserror };
};

export default useFetch;
