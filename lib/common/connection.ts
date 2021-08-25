import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_API_HOST_URL || "";

export const customHeaders = {
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

export const API = axios.create({
  baseURL,
  headers: customHeaders,
});
