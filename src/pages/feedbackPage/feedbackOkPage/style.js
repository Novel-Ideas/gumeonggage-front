import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const box = css`
    box-sizing: border-box;
    width: 70%;
    height: 60%;
    border: 2px solid #dbdbdb;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const thankyouComment = css`
    font-size: 50px;
    font-weight: 600;
`;

export const checkButton = css`
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    padding: 15px 200px;
    background-color: white;
    box-shadow: 5px 5px 5px #898989ff;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
