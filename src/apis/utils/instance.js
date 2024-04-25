import axios from "axios";

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

portOneInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        switch (error.response.status) {
            case 401:
                portOneInstance
                    .post("/token/refresh", {
                        refreshToken: localStorage.getItem(
                            "PortOneRefreshToken"
                        ),
                    })
                    .then((response) => {
                        localStorage.setItem(
                            "PortOneAccessToken",
                            response.accessToken
                        );
                        localStorage.setItem(
                            "PortOneRefreshToken",
                            response.refreshToken
                        );
                    });
                break;
            default:
        }
        return Promise.reject(error);
    }
);
