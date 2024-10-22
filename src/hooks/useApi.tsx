import React, { useState } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';


const useApi = () => {
  const baseURL = "https://sycure-be.onrender.com/v1/estate"
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api: AxiosInstance = axios.create({
   baseURL: "https://sycure-be.onrender.com/v1/estate", // Replace with your base URL
   });

  api.interceptors.request.use(
   (config) => {
     const token = Cookies.get('adminToken')
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
   },
   (error) => {
     return Promise.reject(error);
   }
 );

  const request = async (method: 'get' | 'post' | 'put' | 'delete', endpoint: string, data: any = null, config?: AxiosRequestConfig) => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios({
        method,
        url: `${baseURL}${endpoint}`,
        data,
        ...config,
      });
      setResponse(res.data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.log(err?.response?.data)
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, request };
};

export default useApi;