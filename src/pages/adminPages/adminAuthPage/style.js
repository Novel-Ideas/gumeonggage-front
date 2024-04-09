import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const signinBox = css`
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 30px;
    background-color: rgb(252, 10, 86);
    padding: 50px;
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px #898989ff;

    & > h1 {
        font-size: 60px;
        color: white;
        font-weight: 700;
    }
`;

export const inputInfo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    & > input {
        width: 250px;
        height: 40px;
        border: none;
        border-radius: 10px;
        outline: none;
        font-size: 25px;
        padding: 5px 10px;
    }
`;

export const loginButton = css`
    margin-top: 30px;
    color: rgb(252, 10, 86);
    font-weight: 700;
    font-size: 30px;
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    border-radius: 20px;
    background-color: white;
    padding: 20px 190px;
    box-shadow: 5px 5px 5px #898989ff;

    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;
