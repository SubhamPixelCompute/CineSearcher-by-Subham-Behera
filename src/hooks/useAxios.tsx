import React, { useEffect } from 'react'
import { api } from "../api/axios.ts";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const useAxios = () => {
  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        console.log(res.config)
        return res.data
      },
      (err: AxiosError) => Promise.reject(err)
    )

    return () => {
      api.interceptors.response.eject(responseInterceptor)
    }
  },[])

  return api
}

export default useAxios
