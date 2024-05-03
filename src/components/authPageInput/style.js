import { css } from "@emotion/react";

export const inputBox = css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 23px;
    padding: 5px 10px;

    &:hover {
        background-color: #dbdbdb;
    }
`;

export const messageBox = (type) => css`
    padding: ${type === "error" ? "5px 0px" : 0};
    width: 80%;
    margin-top: 10px;
    color: ${type === "error" ? "white" : "#00921b"};
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-right: 20px;
`;

export const inputIcon = (type) => css`
    position: absolute;
    font-size: 20px;
    top: ${type === "error" ? "65px" : "14px"};
    right: ${type === "error" ? "280px" : "-45px"};
    color: white;
`;
