import axios from "axios";

export const instance = axios.create({
    baseURL: "http://3.36.22.124",
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
