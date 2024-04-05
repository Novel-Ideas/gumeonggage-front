import { css } from "@emotion/react";

export const category = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 150px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    cursor: pointer;
    &:hover {
        background-color: #ffffffdc;
    }
    &:active {
        background-color: #fcd93c;
        & > div:nth-of-type(1) {
            background-color: white;
        }
    }
`;

export const imglayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 80%;
    height: 70%;
    border-radius: 15px;
    border: 1px solid #dbdbdb;
    font-size: 40px;
`;

export const to3Img = css`
    box-sizing: border-box;
`;

export const fontlayout = css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const categoryfont = css`
    font-size: 20px;
    color: #aaa;
`;