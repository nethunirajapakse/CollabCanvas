import axios from "axios";

const REST_API_BASE_URL = "http://localhost:3000";

export const getMessage = () => axios.get(`${REST_API_BASE_URL}/message`);
