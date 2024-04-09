import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const header = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: 500;
`;

export const main = css`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const mainBox = css`
    box-sizing: border-box;
    width: 70%;
    height: 90%;
    /* border: 2px solid rgb(252, 10, 86); */
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const selectQuantity = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;

    & > button {
        border: none;
        background-color: transparent;
        font-size: 40px;
        color: rgb(252, 10, 86);
    }
`;

export const pricePerPerson = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 20px;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > h1 {
        font-size: 30px;
        font-weight: 600;
    }
`;

export const orderHistory = css`
    box-sizing: border-box;
    border: 1px solid gray;
    width: 40%;
    height: 50%;
`;

export const buttonBox = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const button = css`
    padding: 20px 100px;
    box-shadow: 5px 5px 5px #898989ff;
    color: rgb(252, 10, 86);
    font-weight: 700;
    font-size: 30px;
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 20px;
    background-color: white;

    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }

    &:nth-of-type(1) {
        margin-right: 20px;
    }
`;
