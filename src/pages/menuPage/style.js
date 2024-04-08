import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const container = css`
    width: 70%;
    height: 100%;
`;

export const categoryLayout = css`
    position: relative;
    height: 30%;
    display: flex;
    padding-left: 40px;
`;

export const menuLayout = css`
    height: 70%;
    background-color: coral;
`;

export const categoryBox = css`
    display: flex;
    height: 100%;
    width: 50%;
`;

export const bigButton = css`
    position: absolute;
    top: 10px;
    right: 30px;
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 30px;
    font-weight: 700;
    background-color: rgb(252, 10, 86);
    color: white;
    box-shadow: 5px 5px 5px #898989ff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;

export const orderLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 30%;
    height: 100%;
    background-color: white;
`;

export const orderMenuLayout = css`
    width: 100%;
    height: 80%;
`;

export const orderButtonLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 20%;
    border-top: 1px solid #dbdbdb;
`;

export const orderButton = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 20px;
    background-color: rgb(252, 10, 86);
    font-size: 30px;
    font-weight: 700;
    padding: 15px 90px;
    color: white;
    box-shadow: 5px 5px 5px #898989ff;
    transition: all 0.2s ease-in-out;

    & > p {
        font-size: 20px;
        font-weight: 500;
    }
    &:hover {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;
