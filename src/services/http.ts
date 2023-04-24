import axios from "axios";

export default axios.create({
  baseURL: `https://api.getbloop.co/api/v1`,
});