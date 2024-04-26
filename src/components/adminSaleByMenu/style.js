import { css } from "@emotion/react";

export const layout = css`
    z-index: 90;
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
    border-bottom: 2px solid #222;
    color: #222;
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

export const chartLayout = css`
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const chartBox = css`
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    width: 90%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const buttonLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const cancel = css`
    align-items: center;
    justify-content: center;
    outline: none;
    margin-top: 20px;
    background-color: rgb(0, 153, 255);
    font-size: 30px;
    font-weight: 600;
    color: white;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 15px;
    padding: 10px 30px;

    &:active {
        background-color: white;
        color: rgb(0, 153, 255);
    }

`;