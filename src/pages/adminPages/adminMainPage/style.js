import { css } from "@emotion/react";

export const layout = css`
    z-index: 0;
    position: relative;
    width: 100vw;//모니터 기준
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
`;

export const boxLayout = css`
    width: 100%;
    height: 400px;
`;

export const fontLayout = css`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 15px 0;

    & > :nth-of-type(1) {
        padding-left: 45px;
        padding-top: 8px;
        font-size: 40px;
        font-weight: 600;
        color: #555;
    }
    & > :nth-of-type(2) {
        padding-left: 10px;
        padding-top: 27px;
        font-size: 20px;
        font-weight: 600;
        color: #555;
    }
`;

export const boxContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
`;

export const categoryBox = css`
    margin-bottom: 10px;    
    box-sizing: border-box;
    background-color: #dbdbdb;
    width: 90%;
    height: 300px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #dbdbdb
    
`;

export const top3 = css`

`;
