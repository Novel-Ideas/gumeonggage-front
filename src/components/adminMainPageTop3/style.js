import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const container = css`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ;
    justify-content: center;
`;

export const lankingContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: coral; */

`
export const icon = (index) => css`
    color: ${index === 0 ? "gold" : index === 1 ? "silver" : "#cc9c5c" };
`


export const font = css`
    height: 10%;
    padding-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
    color: #555;
    display: flex;
    align-items: center;
`;

export const top3 = css`
    width: 80%;
    height: 65%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    & > img {
        width: 100%;
    }
`;

export const menu = css`
    height: 10%;
    padding: 15px;
    font-size: large;
    font-weight: 700;

`;