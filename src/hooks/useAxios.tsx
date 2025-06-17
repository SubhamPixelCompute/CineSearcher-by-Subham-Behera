// useAxios.ts
import { useEffect } from "react";
import { api } from "../api/axios";
import { AxiosError, AxiosResponse } from "axios";

let isInterceptorAttached = false;

const useAxios = () => {
  useEffect(() => {
    if (isInterceptorAttached) return;

    const responseInterceptor = api.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      (err: AxiosError) => Promise.reject(err)
    );

    isInterceptorAttached = true;

    return () => {
      api.interceptors.response.eject(responseInterceptor);
      isInterceptorAttached = false;
    };
  }, []);

  return api;
};

export default useAxios;

