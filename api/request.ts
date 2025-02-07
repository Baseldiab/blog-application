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
  timeout: 30000, 
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

  const onError = (error: AxiosError) => {
    console.error('API Request failed:', {
      url: error.config?.url,
      method: error.config?.method,
      timeout: error.config?.timeout,
      error: error.message
    });
    
    return Promise.reject({
      message: error.message || 'Request failed',
      code: error.code,
      response: error.response,
      url: error.config?.url
    });
  };

  return client(mergedOptions).then(onSuccess).catch(onError);
};

export { request };
