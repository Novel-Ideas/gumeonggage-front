import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vh;

`;

export const inputInfo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    & > input{
        width: 20vw;
        height: 4vh;
        
    }
`

export const loginButton = css`
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
        font-size: 16px;
        width: 150px;
        height: 40px;
    }

`
