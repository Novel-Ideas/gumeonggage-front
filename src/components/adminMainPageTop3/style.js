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
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ;
    justify-content: center;
`;

export const lankingContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`
export const icon = (index) => css`
    color: ${index === 0 ? "gold" : index === 1 ? "silver" : "#cc9c5c" };
`


export const font = css`
    padding-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
    color: #555;
`;

export const top3 = css`
    width: 100%;
    height: 180px;
    border-radius: 10px;
    & > img {
        width: 100%;
    }
`;

export const menu = css`
    padding: 15px;
    font-size: large;
    font-weight: 700;

`;