import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 50vw;
    height: 50vh;
    align-items: center;
    justify-content: center;
    
    & > h1 {
        display: flex;
        justify-content: center;
        font-size: 35px;
        
    }
    
`;

export const inputInfo = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;

    & > input {
        width: 150px;
        height: 30px;
    }
`;

export const signupButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
    & > * {
        font-size: 20px;
        width: 160px;
        height: 40px;
    }

`;

