import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig,deps?:unknown[] ) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => { 
    const controller = new AbortController();
    setLoading(true);

 

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => { 
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "CanceledError" && err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
 }, [endpoint, requestConfig, ...(deps ?? [])]);



  return { data, error, isLoading };
}