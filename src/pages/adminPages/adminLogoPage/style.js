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

export const buttonLayout = css`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
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
    &:active {
        background-color: white;
        color: rgb(0, 153, 255);
    }
`

export const ImgLayout = css`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    `
export const ImgContainer = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
    
export const ImgBox = css`
    background-color: white;
    margin-top: 30px;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px #dbdbdb;
`
export const Img = css`
    width: 80%;
    height: 75%;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    background-color: #dbdbdb;
`
export const arrowBox = css`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const arrow = css`
    width: 100%;
    height: 10%;
    font-size: 70px;
    color:  rgb(0, 153, 255);
`