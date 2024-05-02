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
    border-bottom: 2px solid #222;
    color: #222;
    width: 90%;
    height: 40%;
    font-size: 40px;
    font-weight: 700;
`;

export const contatiner = css`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const inputLayout = css`
    box-sizing: border-box;
    border: 2px solid rgb(0, 153, 255);
    margin: 25px;
    background-color: rgb(0, 153, 255);
    color: white;
    border-radius: 30px;
    width: 30%;
    height: 70%;
    display: flex;
    align-items: center;
    font-size: 25px;
`;

export const input = css`
    box-sizing: border-box;
    border: 1px solid rgb(0, 153, 255);
    width: 100%;
    height: 100%;
    font-size: 65px;
    outline: none;
    border-radius: 20px;
`;

export const arrowBox = css`
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const arrow = css`
    width: 100%;
    height: 15%;
    font-size: 70px;
    color: rgb(0, 153, 255);
`;

export const buttonLayout = css`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const button = css`
    box-sizing: border-box;
    background-color: rgb(0, 153, 255);
    margin-right: 40px;
    font-size: 30px;
    font-weight: 600;
    color: white;
    border: 2px solid rgb(0, 153, 255);
    border-radius: 15px;
    padding: 10px 40px;
    transition: 0.2s all ease-in-out;
    box-shadow: 5px 5px 5px #bdc7ca;

    &:active {
        background-color: white;
        color: rgb(0, 153, 255);
    }
`;