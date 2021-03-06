import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error: AxiosError) => {
    if (error.response?.status === 401 && localStorage.getItem('token')) {
      localStorage.removeItem('token');
      window.location.reload();
    }

    return Promise.reject(error);
  },
);

const API = {

  request: <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const token = localStorage.getItem('token');
    const headers = config.headers || {};
    headers['Accept-Language'] = 'ru';

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axiosInstance.request({ ...config, headers });
  },

  lookup: async <T>(url: string): Promise<T> => {
    const headers = {
      'X-Lookup-Request': 'true',
    };

    const results = await API
      .request<T>({ url, headers })
      .then((response) => response.data);

    return Promise.resolve(results);
  },
};

export default API;
