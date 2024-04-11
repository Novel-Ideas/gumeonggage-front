import { css } from "@emotion/react";

export const menuLayout = css`
    height: 100%;
    /* & > button:nth-of-type(1) {
        margin-right: 15px;
        margin-bottom: 15px;
    } */
`;

export const menu = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 480px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb;
    cursor: pointer;

    &:active {
        background-color: #f9d017;
    }
    &:visited {
        background-color: white;
    }
`;

export const lanking = (index) => css`
    font-size: 35px;
    font-weight: 700;
    padding-bottom: 7px;
    color: ${index === 0 ? "gold" : index === 1 ? "silver" : "#cc9c5c"};
`;

export const imglayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 260px;
    overflow: hidden;
    background-color: transparent;

    &:active {
        background-color: #f9d017;
    }

    & > img {
        width: 100%;
        background-color: transparent;
    }
`;

export const menuListLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const menuFont = css`
    font-size: x-large;
    color: #3f3f3f;
    margin: 8px 0px;
    font-weight: 600;
    margin-bottom: 4px;
    padding-top: 3px;
`;

export const calFont = css`
    font-size: 20px;
    font-weight: 500;
    color: #898989;
    margin-bottom: 5px;
`;

export const priceFontLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    margin-bottom: 10px;
`;

export const priceFont = css`
    font-size: x-large;
    color: #898989;
`;
