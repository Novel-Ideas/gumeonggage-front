import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 95%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const listContainer = css`
    height: 100%;
    width: 100%;
    margin-left: 30px;
    box-sizing: border-box;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const listLayout = css`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`;

export const list = css`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    padding: 1em;
    background: rgb(43, 43, 43);
    position: relative;
    color: white;
    border-radius: 15px;
`;

export const contentLayout = css`
    width: 2000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const container = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 90%;
    height: 95%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`;

export const top = css`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: flex-end;
`;

export const mapButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    width: 15%;
    height: 40%;
    padding: 20px;
    margin-top: 15px;
    margin-right: 25px;
    border-radius: 10px;
    font-weight: 700;
    text-align: center;
    background-color: white;
    border: 1px solid rgb(252, 10, 86);
    box-shadow: 3px 3px 3px #ada8a8;
    color: rgb(252, 10, 86);
    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;
export const bodyContainer = css`
    width: 90%;
    height: 100%;
    margin-left: 25px;
`;

export const name = css`
    width: 100%;
    height: 10%;
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 10px;
`;

export const openNow = (boolean) => css`
    box-sizing: border-box;
    border: 4px solid ${boolean === true ? "green" : "red"};
    border-radius: 10px;
    color: ${boolean === true ? "green" : "red"};
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
`;

export const text = css`
    width: 100%;
    height: 10%;
`;
export const review = css`
    width: 100%;
    height: 50%;
    border-top: 1px solid #dbdbdb;
`;
