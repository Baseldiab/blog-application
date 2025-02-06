import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";

const base_backend_url = "https://jsonplaceholder.typicode.com";

const api_url = base_backend_url + "/";

const client = axios.create({
  baseURL: api_url,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
  withCredentials: false
});

const request = async (options: AxiosRequestConfig) => {
  const defaultOptions: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Merge headers
  const mergedHeaders = {
    ...defaultOptions.headers,
    ...options.headers,
  };

  // Merge options
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: mergedHeaders,
    withCredentials: false
  };

  const onSuccess = (response: AxiosResponse) => response.data;

  const onError = (error: AxiosError) =>
    Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    });

  return client(mergedOptions).then(onSuccess).catch(onError);
};

export { request };
