import instance from "../utils/instance";

export const getSalesRequest = async () => {
    return await instance.get("/admin/sales");
};

export const searchSalesByMenuRequest = async () => {
    return await instance.get("/admin/menusales")
};