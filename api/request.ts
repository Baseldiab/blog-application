import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";

// Use environment variable or fallback to default
const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "https://jsonplaceholder.typicode.com";

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
  withCredentials: false,
  timeout: 10000, // Add reasonable timeout
});

const request = async (options: AxiosRequestConfig) => {
  const defaultOptions: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Merge headers and options in one step
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
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
