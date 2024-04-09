import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;// 세로로 세우겠다
    /* justify-content: center;//가로중간 이거없으면  */
    align-items:flex-start;//세로
`;

export const textbox = css`
    width: 40%;
    height: 15%;
    box-sizing: border-box;
    
`;
export const text = css`
    margin-top: 50px;
    color: black;
`;

export const addAndCancleBox = css`
    width: 100%;
    height: 5%;
    font-size: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: end;

`;

export const addAndCancle = css`
    margin: 0 15px;
    width: 60px;
`;

export const tableContainer = css`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    border-collapse: collapse;
`;

export const tableHeader = css`
    width: 20%;
    font-size: 40px;
    text-align: center;
    border: 1px solid black;

`;

export const table = css`
    border: 1px solid black;
    width: 50%;
    height: 80px;
    text-align: center;
`;
export const inputBox = css`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 50px;
`;







//마진이나 포지션은 최대한 쓰지말것