import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 404) {
      console.log(404);
    }
    console.error(res.status);
    return Promise.reject(error);
  }
);
