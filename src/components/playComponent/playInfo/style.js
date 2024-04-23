import { css } from "@emotion/react";

export const layout = css`
    width: 2000px;
    height: 100%;
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const container = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 90%;
    height: 83%;
    /* background-color: coral; */
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`;

export const top = css`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: flex-end;
`;

export const mapButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13%;
    height: 40%;
    padding: 20px;
    margin-top: 15px;
    margin-right: 25px;
    border-radius: 10px;
    font-weight: 700;
    text-align: center;
    background-color: white;
    border: 1px solid rgb(252, 10, 86);
    box-shadow: 3px 3px 3px #ada8a8;
    color: rgb(252, 10, 86);
    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;
export const bodyContainer = css`
    width: 90%;
    height: 100%;
    margin-left: 25px;
`

export const name = css`
    width: 100%;
    height: 10%;
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 10px;
`;

export const text = css`
    width: 100%;
    height: 10%;
`
export const review = css`
    width: 100%;
    height: 50%;
    border-top: 1px solid #dbdbdb;
    
`
