import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const header = css`
    width: 100%;
    height: 10%;
    display: flex;
    padding-top: 20px;

    & > h1:nth-of-type(1) {
        font-size: 45px;
        font-weight: 700;
        padding-left: 20px;
    }

    & > h1:nth-of-type(2) {
        font-size: 45px;
        font-weight: 300;
        margin-left: 5px;
    }
`;

export const orderLayout = css`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
`;

export const orderBox = css`
    margin-top: 20px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-content: center;
    /* background-color: aliceblue; */
`;

export const orderInfoBox = css`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 0px 20px; */

    & > h1:nth-of-type(1) {
        font-size: 30px;
        margin-left: 20px;
    }

    & > h1:nth-of-type(2) {
        font-size: 25px;
        font-weight: 700;
        margin-right: 20px;
    }
`;

export const orderCountBox = css`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const orderCount = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-left: 20px;

    & > div {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > div:nth-of-type(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }
`;

export const removeButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    font-size: 35px;
    color: red;
`;
