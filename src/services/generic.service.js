import axios from "axios";

const API_URL = "http://176.99.11.6:3005/api/v1";

export const request = async ({ url, method, data }) => {
  const response = await axios[method](`${API_URL}/${url}`, data);
  return response.data;
};
