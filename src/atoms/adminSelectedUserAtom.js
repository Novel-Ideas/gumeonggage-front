import { atom } from "recoil";

export const selectedUserState = atom({
    key: "selectedUserState",
    default: {
        userId: 0,
        roleId: 0,
        roleNameKor: "",
        phonenumber: "",
    }
})