import { css } from "@emotion/react";

export const layout = css`
z-index: 99;
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
    padding-left: 30px;
`;

export const text = css`
    margin-top: 50px;
    font-size: 38px;
    font-weight: 600;
    color: #555;
    width: 180px;
    padding-bottom: 15px;
    border-bottom: 1px solid #888;
`;

export const addAndCancleBox = css`
    width: 100%;
    height: 5%;
    font-size: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    padding-right: 30px;
    margin-bottom: 10px;
    
`;

export const addAndCancle = css`
    margin: 0 13px;
    width: 70px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    background-color: #fafafa;
    box-shadow: 2px 2px 3px #0000001f;
    &:hover {
        background-color: #dfdfdf;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;

export const tableLayout = css`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    
`;

export const tableContainer = css`
    width: 90%;
    box-sizing: border-box;
    border-radius: 10px;
    border-collapse: collapse;
    border-style: hidden;
    box-shadow: 0 0 0 1px #bbb;
`;


export const tableHeader = css`
    width: 23%;
    font-size: 26px;
    text-align: center;
    border: 1px solid #bbb;
    background-color: #fbfbfb;
    border-radius: 10px;
    color: #636363;
`;

export const table = css`
    width: 50%;
    height: 80px;
    text-align: center;
`;
export const inputBox = css`
    padding-left: 13px;
    width: 100%;
    height: 100%;
    border-left: none;
    border-right: none;
    border: 1px solid #dbdbdb;
    outline: none;
    font-size: 23px;
    background-color: fafafa;
`;

export const img = css`
    padding-left: 15px;
`;







//마진이나 포지션은 최대한 쓰지말것