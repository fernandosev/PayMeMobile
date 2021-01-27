import axios from "axios";
import { API_BASE_URL } from "@env";

export const { CancelToken, isCancel } = axios;

console.log(API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
