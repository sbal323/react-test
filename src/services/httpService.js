import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";
import { getToken } from "./authService";

axios.defaults.headers.common["X-Auth-Token"] = getToken();

axios.interceptors.response.use(null, error => {
  const { response } = error;
  const expectedError =
    response && response.status >= 400 && response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred. " + error);
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put
};
