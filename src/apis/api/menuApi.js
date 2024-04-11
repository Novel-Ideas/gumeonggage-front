import instance from "../utils/instance";

export const registerMenuRequest = async (data) => {
    return await instance.post("/admin/menu", data);
};
