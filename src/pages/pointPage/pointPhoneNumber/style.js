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

export const inputBox = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const phoneNumberInput = css`
    width: 35vw;
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
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgb(252, 10, 86);
    
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
    
    &:hover {
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