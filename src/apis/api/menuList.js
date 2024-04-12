import instance from "../utils/instance";

export const getMenuRequest = async (categoryId) => {
    return await instance.get(`/menus?categoryId=${categoryId}`);
};

export const getTop3Request = async () => {
    return await instance.get("/menu/ranking");
};

export const getBurgerRequest = async () => {
    return await instance.get("/menus/burger");
};

export const getDrinkRequest = async () => {
    return await instance.get("/menus/drink");
};
