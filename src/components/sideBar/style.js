import { css } from "@emotion/react";

export const container = css` 
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    background-color: white;
    overflow-y: 30;
    box-shadow: 1px 0px 2px #00000022;
`;

export const link = css`
    display: flex;
    margin-top: 15px;
    text-decoration: none;
    cursor: pointer;
    color: #333;
    font-size: 20px;
    
`;

export const homeLayout = css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    padding-left: 30px;
`;

export const home = css`
    margin: 0;
    font-size: 40px;
    font-weight: 700;
    color: #222;
    text-decoration: none;
    cursor: pointer;
`;

export const font = css`
    padding-top: 13px;
    width: 290px;
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    border-top: 1px solid #dbdbdb;
`;

export const salesLayout = css`
    width: 100%;
    height: 120px;
    padding-left: 30px;
`;

export const menuLayout = css`
    width: 100%;
    height: 160px;
    padding-left: 30px;
`;

export const feedbackLayout = css`
    width: 100%;
    height: 130px;
    padding-left: 30px;
`;
