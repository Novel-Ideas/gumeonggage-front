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
    box-sizing: border-box;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #dbdbdb;

    & > h1 {
        font-size: 45px;
        font-weight: 700;
    }
`;

export const main = css`
    width: 100%;
    height: 80%;
    display: flex;
`;

export const orderListBox = css`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border-right: 2px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const orderBox = css`
    box-sizing: border-box;
    width: 80%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
`;

export const orderInfo = css`
    width: 80%;
    height: 100px;
`;

export const infoBox = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & > div:nth-of-type(1) {
        font-size: 25px;
        font-weight: 500;
        margin: 0 10px;
    }

    & > div:nth-of-type(2) {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        margin: 0 10px;
    }
`;

export const buttonBox = css`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        border: none;
        background-color: transparent;
        font-size: 40px;
        color: rgb(252, 10, 86);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        padding: 3px;
        transition: 0.2s all ease-in-out;

        &:active {
            background-color: rgb(252, 10, 86);
            color: white;
        }
    }
`;

export const payListBox = css`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const payList = css`
    box-sizing: border-box;
    width: 100%;
    height: 80%;
    border-right: 2px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border-bottom: 1px solid #dbdbdb;
`;

export const payButtonBox = css`
    width: 70%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button {
        box-sizing: border-box;
        border: 2px solid rgb(252, 10, 86);
        border-radius: 20px;
        background-color: rgb(252, 10, 86);
        font-size: 30px;
        font-weight: 700;
        padding: 15px 30px;
        color: white;
        box-shadow: 5px 5px 5px #898989ff;
        transition: all 0.2s ease-in-out;

        &:active {
            background-color: white;
            color: rgb(252, 10, 86);
        }
    }
`;
