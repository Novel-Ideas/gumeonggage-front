import axios from "axios";
import { instance, portOneInstance } from "../utils/instance";

export const getSalesRequest = async () => {
    return await instance.get("/admin/sales");
};

export const getPaymentsRequest = async () => {
    return await portOneInstance.get("/payments", {
        headers: {
            Authorization: localStorage.getItem("PortOneAccessToken"),
        },
        data: {
            page: {
                size: 5,
            },
            filter: {
                storeId: process.env.REACT_APP_STORE_ID,
                isTest: true,
            },
        },
    });
};
