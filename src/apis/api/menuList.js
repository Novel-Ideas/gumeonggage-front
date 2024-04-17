import instance from "../utils/instance";

export const getMenuRequest = async () => {
    return await instance.get("/admin/menus");
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

export const updateMenuRequest = async (data) => {
    return await instance.put("/menus", data);
}

export const deleteMenuRequest = async (menuId) => {
    return await instance.delete("/menus", menuId)
}