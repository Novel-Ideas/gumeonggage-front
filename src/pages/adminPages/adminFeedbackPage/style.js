import { css } from "@emotion/react";

export const layout = css`
    z-index: 99;
    width: 100%;
    height: 100%;
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

export const searchBoxLayout = css`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const searchBox = css`
    width: 80%;
    height: 80%;
    border: 1px solid #4d4d4d;
    border-radius: 30px;
    background-color: white;
`

export const top = css`
    background-color: #fafafa;
    width: 100%;
    height: 10%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4d4d4d;
`

export const circle = css`
    padding-left: 13px;
    &:nth-of-type(1) {
        color: red
}
    &:nth-of-type(2) {
        color: gold
}
    &:nth-of-type(3) {
        color: green
}
`
export const searchLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 755px;
    height: 100%;
`;

export const search = css`
    width: 100%;
    height: 100%;
`;

export const askTitle = css`
    list-style-type: none;
    background-color: #369;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10%;
    color: white;
`;

export const listLayout = css`
    width: 100%;
    height: 80%;
`;

export const askList = css`
    list-style-type: none;
    background-color: #369;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10%;
    color: white;
`;