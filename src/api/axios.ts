import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.omdbapi.com/?",
  headers: { 'Content-Type': 'application/json' },
})
