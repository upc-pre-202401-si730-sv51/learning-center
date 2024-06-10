import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Create an Axios instance with a base URL and JSON content type.
 * @type {axios.AxiosInstance}
 */
const http = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
});

export default http;
