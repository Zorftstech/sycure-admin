import axios from "axios";


const getAuthToken = async () => {
    try {
      const token = await localStorage.getItem('admintoken');
      return token;
    } catch (error) {
      return "";
    }
};

const axiosInterceptor = axios.create({
    baseURL: "https://127.0.0.1:3000/v1/estate"
    // baseURL: "http://16.171.174.20:8000/api/v1"
})

axiosInterceptor.interceptors.request.use(async (config: any) => {
    const token = await getAuthToken();
    console.log(token)
    // config.headers.ContentType = 'application/json';
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (err: any) => {
    Promise.reject(err);
})


export default axiosInterceptor;