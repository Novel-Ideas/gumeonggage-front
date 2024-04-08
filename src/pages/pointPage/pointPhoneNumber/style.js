import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;// 세로로 세우겠다
    /* justify-content: center;//가로중간 이거없으면  */
    align-items: center;//세로중간
`;

export const textbox = css`
    width: 40%;
    height: 15%;
    box-sizing: border-box;
    
`;
export const text = css`
    margin-top: 50px;
    text-align: center;
    color: black;
`;

export const phoneNumber = css`
    width: 40%;
    height: 10%;
    font-size: 50px;
    box-sizing: border-box;
    border: 1px solid black;

`;

export const phoneNumberBox = css`
    width: 40%;
`;

export const tableContainer = css`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    border-collapse: collapse;
`;

export const table = css`
    border: 0;
    border: 1px solid black;
    width: 100px;
    height: 80px;
    text-align: center;
    &:hover {
        background-color: #dbdbdb;
    }
`;
export const number = css`
    border: none;
    background-color: transparent;
    cursor: pointer;
    
`;


export const numberFont = css`
    font-size: 40px; // 원하는 폰트 크기로 설정
    
`;

//마진이나 포지션은 최대한 쓰지말것