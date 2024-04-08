import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-left: 40px;
`;

export const chooseFont = css`
    font-size: 45px;
    font-weight: 600;
    color: #222;
    cursor: default;
`;

export const orderFont = css`
    margin-left: 5px;
    font-size: 45px;
    font-weight: 300;
    color: #222;
    cursor: default;
`;

export const menuListLayout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-top: 10px;
`;

export const menuListBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
`;
