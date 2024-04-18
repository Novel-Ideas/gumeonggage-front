import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`;

export const listContainer = css`
    height: 80%;
    width: 80%;
    box-sizing: border-box;
    border: 1px solid #222;
    /* background-color: aqua; */
    overflow: scroll;
    border-radius: 30px;
    ::-webkit-scrollbar {
	display:none 
}
    box-shadow: 2px 2px 5px #dbdbdb;
`;

export const listLayout = css`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    /* gap: 15px; */
`;

export const list = css`
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 105px;
    background-color: white;
    font-size: 18px;
`;
