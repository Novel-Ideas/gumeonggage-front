import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border: 1px solid #fefefe;
    background-color: gainsboro;
    width: 70vw;
    height: 60vh;
    
    & > h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        
    }
`;

export const result = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 70%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    
` 

export const selectQuantity = css`

`

export const pricePerPerson = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 10vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const orderHistory = css`
    box-sizing: border-box;
    border: 1px solid gray;
    width: 40%;
    height: 50%;

`;

export const payButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > button {
        width: 120px;
        height: 30px;
    }
`;

export const cancelButton = css`
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
        width: 120px;
        height: 30px;
    }
`;
