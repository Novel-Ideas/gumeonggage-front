import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        position: absolute;
        top: 50px;
        font-size: 50px;
        font-weight: 600;
        cursor: default;
    }
`;

export const feedbackLayout = css`
    box-sizing: border-box;
    border: 2px solid #dbdbdb;
    border-radius: 30px;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const feedbackBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const feedbackContents = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;

    & > h1 {
        font-size: 40px;
        margin-bottom: 10px;
        cursor: default;
    }
`;

export const radioButton = css`
    display: flex;
    align-items: center;
    & > input {
        font-size: 20px;
        width: 20px;
        height: 20px;
    }
    & > label {
        font-size: 35px;
        margin-right: 20px;
        cursor: pointer;
    }
`;

export const checkButton = css`
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px 10px;
    background-color: white;
    box-shadow: 5px 5px 5px #33333322;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
