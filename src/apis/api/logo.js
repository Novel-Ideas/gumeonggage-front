import instance from "../utils/instance";

export const registerLogoRequest = async (data) => {
    return await instance.post("/admin/logo", data);
};
