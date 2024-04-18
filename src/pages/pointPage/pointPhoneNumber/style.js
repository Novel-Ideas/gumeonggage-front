import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const textbox = css`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const text = css`
    font-size: 60px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const phoneNumberLayout = css`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const phoneNumberInput = css`
    width: 50%;
    height: 22%;
    outline: none;
    border: 2px solid rgb(252, 10, 86);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size: 45px;
    box-sizing: border-box;
    border-bottom: 2px solid rgb(252, 10, 86);
`;

export const tableContainer = css`
    width: 50%;
    border-collapse: collapse;
    border-radius: 15px;
    border-style: hidden;
    box-shadow: 0 0 0 0.5 rgb(252, 10, 86);
`;

export const table = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    width: 90px;
    height: 100px;
    border-left: 20px;
    text-align: center;
    justify-content: center;
    background-color: rgb(252, 10, 86);

    &:active {
        background-color: crimson;
    }
`;

export const number = css`
    height: 100%;
    border: none;
    font-size: 40px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: white;
`;

export const trBox = css`
    & > td:nth-of-type(1) {
        border-bottom-left-radius: 15px;
    }
    & > td:nth-of-type(3) {
        border-bottom-right-radius: 15px;
    }
`;
