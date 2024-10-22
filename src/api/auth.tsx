import axiosInterceptor from "./interceptor";

export const SearchCarFilter = async (params?:any) => {
    return axiosInterceptor.get(`/carSearch`, {params});
}

export const signupadmin = async (data:any) => {
   return axiosInterceptor.post(`/register`, data);
}

export const addToFavorite = async (id:any) => {
   return axiosInterceptor.post(`/addFavourite/${id}`);
}