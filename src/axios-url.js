import axios from "axios";

let token = localStorage.getItem("user");
const instanceOrders = axios.create({
  baseURL: "https://d22b55a9.ngrok.io"
});

axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + token
};

export default instanceOrders;
