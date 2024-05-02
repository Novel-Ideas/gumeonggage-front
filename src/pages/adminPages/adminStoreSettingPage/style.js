import { css } from "@emotion/react";

export const layout = css`
    z-index: 99;
    width: 100%;
    height: 100%;

    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const header = css`
    width: 100%;
    height: 30%;
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

export const main = css`
    width: 100%;
    /* height: 80%; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const mainLayout = css`
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const mainBox = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const mainTitle = css`
    font-size: 30px;
    font-weight: 500;
`;

export const buttonBox = css`
    width: 90%;
    height: 20%;
`;

export const logoLayout = css`
    width: 100%;
    height: 100%;
`;
