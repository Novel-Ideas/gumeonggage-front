import { css } from "@emotion/react";

export const layout = css`
    z-index: 99;
    width: 100%;
    height: 100%;
`;

export const header = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const title = css`
    box-sizing: border-box;
    border-bottom: 1px solid #333;
    width: 90%;
    height: 30%;
    font-size: 40px;
    font-weight: 700;
`;

export const main = css`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const resetLayout = css`
    width: 90%;
    height: 10%;
    display: flex;
    justify-content: right;
    align-items: center;

    & > button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        font-size: 30px;
        color: #222;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
`;

export const addLayout = css`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
`;

export const addBox = css`
    box-sizing: border-box;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const imgLayout = css`
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const imgBox = css`
    width: 80%;
    height: 70%;
    border-radius: 20px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const inputLayout = css`
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const footer = css`
    width: 100%;
    height: 20%;
`;
