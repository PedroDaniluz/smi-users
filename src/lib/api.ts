import axios from "axios";

const API_BASE_URL = "http://localhost:5015/api";

export const createApi = (baseURL: string) => axios.create({
  baseURL: baseURL,
});

export const useApi = () => {
    return createApi(API_BASE_URL);
}