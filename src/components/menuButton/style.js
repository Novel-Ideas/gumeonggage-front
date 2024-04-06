import { css } from "@emotion/react";

export const menuLayout = css`
    height: 100%;
    & > button:nth-of-type(1) {
        margin-right: 15px;
    }
`;

export const menu = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 230px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    cursor: pointer;

    &:hover {
        background-color: #fcd93c;
        & > div:nth-of-type(1) {
            background-color: white;
        }
    }
    &:active {
        background-color: #f9d017;
        & > div:nth-of-type(1) {
            background-color: white;
        }
    }
`;

export const imglayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    font-size: 40px;
`;

export const menuListLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const menuFont = css`
    font-size: 24px;
    color: #898989;
`;

export const priceFontLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #898989;
`;

export const priceFont = css`
    font-size: 24px;
    color: #898989;
`;