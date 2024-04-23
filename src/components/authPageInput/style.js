import { css } from "@emotion/react";

export const inputBox = css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
`;

export const input = css`
    /* box-sizing: border-box;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 10px 30px 10px 10px;
    width: 100%;
    background-color: white;
    font-size: 14px;
    cursor: pointer; */
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 25px;
    padding: 5px 10px;
`;

export const messageBox = (type) => css`
    padding: ${type === "error" ? "5px 10px" : 0};
    width: 100%;
    color: ${type === "error" ? "white" : "#00921b"};
    font-size: 18px;
    font-weight: 600;
`;

export const inputIcon = (type) => css`
    position: absolute;
    font-size: 20px;
    top: 16px;
    right: 10px;
    color: ${type === "error" ? "#ff3030" : "#00921b"};
`;
