import { useRecoilState } from "recoil";
import { instance, portOneInstance } from "../utils/instance";
import { easyPayListState } from "../../atoms/easyPayListAtom";

export const getSalesRequest = async () => {
    return await instance.get("/admin/sales");
};

export const getPaymentsRequest = async () => {
    return await portOneInstance
        .get("/payments", {
            headers: {
                Authorization: `PortOne ${process.env.REACT_APP_PORTONE_API_SECRET_KEY}`,
            },
            data: {
                page: {
                    size: 40,
                },
                filter: {
                    storeId: process.env.REACT_APP_STORE_ID,
                    isTest: true,
                },
            },
        })
};
