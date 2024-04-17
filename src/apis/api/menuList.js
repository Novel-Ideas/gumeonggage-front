import instance from "../utils/instance";

export const getMenuRequest = async (categoryId) => {
    return await instance.get(`/menus?categoryId=${categoryId}`);

export const updateMenuRequest = async (data) => {
    return await instance.put("/menus", data);
}

export const deleteMenuRequest = async (menuId) => {
    return await instance.delete("/menus", menuId)
}
