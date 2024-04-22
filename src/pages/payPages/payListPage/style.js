import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const textbox = css`
    width: 100%;
    height: 25%;
    box-sizing: border-box;
    
`;
export const text = css`
    margin-top: 50px;
    text-align: center;
    color: black;
`;

export const paybox = css`
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content:center;
    align-items: center; //세로중간

`;

export const methodLayout = css`
    width: 20%;
    height: 70%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px;
`;

export const methodBox = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 70%;
`;

export const buttonBox = css`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const cancle = css`
    width: 200px;
    height: 40px;
    font-size: 25px;
    
`;

export const buttonX = css`
    font-size: 25px;
    color: red;
`;