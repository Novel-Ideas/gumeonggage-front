import instance from "../utils/instance";

export const signinRequest = async (data) => {
    const response = await instance.post("/admin/auth/signin", data);
    return response;
};

export const signupRequest = async (data) => {
    try {
        const response = instance.post("/admin/auth/signup", data);
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const oAuth2SignupRequest = async (data) => {
    return await instance.post("/admin/auth/oauth2/signup", data);
};
