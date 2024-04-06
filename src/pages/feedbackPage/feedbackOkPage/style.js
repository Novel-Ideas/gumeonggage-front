import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    position: relative;
    border: 1px solid #161515;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    width: 95%;
    height: 300px
`;

export const thankyouComment = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;

export const checkButton = css`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    width: 70px;
    height: 30px;
    font-size: 15px;
    border-radius: 30px;
`;