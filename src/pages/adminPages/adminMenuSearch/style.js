import { css } from "@emotion/react";

export const layout = css`
    z-index: 99;
    width: 100%;
    height: 100%;
    overflow: scroll;
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
    height: 30%;
    font-size: 40px;
    font-weight: 700;
`;

export const searchMenuList = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 110px;
    gap: 20px;
    
`;