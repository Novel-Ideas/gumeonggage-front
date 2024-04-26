import axios from "axios";
import { getPaymentsRequest } from "../api/salesApi";

export const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken"),
    },
});

export const portOneInstance = axios.create({
    baseURL: "https://api.portone.io",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});