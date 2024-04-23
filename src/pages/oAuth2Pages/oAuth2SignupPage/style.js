import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`;

export const inputBox = css`
    width: 40%;
    height: 70%;
    padding: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: rgb(252, 10, 86);
    border: 2px solid rgb(252, 10, 86);
    box-shadow: 5px 5px 5px #898989ff;

    & > h1 {
        font-size: 60px;
        color: white;
        font-weight: 700;
    }

`;

export const input = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    
    & > input {
        width: 300px;
        height: 50px;
        border: none;
        border-radius: 10px;
        outline: none;
        font-size: 25px;
        padding: 5px 10px;
    }

`;

export const registrationButton = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    margin-top: 25px;
    color: rgb(252, 10, 86);
    font-weight: 700;
    border-radius: 20px;
    padding: 20px 150px;
    font-size: 30px;
    background-color: white;
    box-shadow: 5px 5px 5px #898989ff;

    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }

`;