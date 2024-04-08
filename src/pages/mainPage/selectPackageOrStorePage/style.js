import { css } from "@emotion/react"; 

export const layout = css`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const selectWay = css`
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    border-radius: 35px;
    align-items: center;
    float: left;
    width: 450px;
    height: 550px;
    margin: 100px;
    background-color: white;
    font-size: 40px;
`;

export const adminButton = css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    font-size: 25px;
    bottom: 0;
    right: 0;
`;