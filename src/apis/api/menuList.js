import instance from "../utils/instance"

export const getmenuRequest = async () => {
    return await instance.get("/menus")
}