import axios from "axios";

const request = axios.create({
  headers: {
    Authorization: `Bearer`,
  },
  baseURL:
    process.env.NODE_ENV === "development" ? `http://localhost:3001/v1` : "",
});

export default request;
