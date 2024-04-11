import instance from "../utils/instance";

export const getFeedbackRequest = async () => {
    return await instance.get("/admin/feedback/answer");
};