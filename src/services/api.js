import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: "http://localhost:3000" });

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${headers.Authorization || Cookies.get("token")}`,
  },
}));

export default class APIManager {
  static async registerUser(email, password) {
    const response = await API.post("/users", { "user": { "email": email, "password": password } });
    // console.log(response.headers.authorization);
    Cookies.set("token", response.headers.authorization);
    return response.data;
  }

  static async loginUser(email, password) {
    const response = await API.post("/users/sign_in", { "user": { "email": email, "password": password } })
    console.log(response.headers)
    // Cookies.set("token", response.headers.authorization);
    return response.data;
  }
}
