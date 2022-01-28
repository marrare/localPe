import axios from "axios";
import { BACKEND_PROTOCOL, BACKEND_IP, BACKEND_PORT } from '../constants/url';

const api = axios.create({
  baseURL: `${BACKEND_PROTOCOL}://${BACKEND_IP}:${BACKEND_PORT}/`
});

export default api;