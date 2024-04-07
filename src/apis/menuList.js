import instance from "../utils/instance"

export const getmenuList = async (data) => {
    return await instance.put("/menus", data)
}