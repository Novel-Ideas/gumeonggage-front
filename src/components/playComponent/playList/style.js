import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const listContainer = css`
    height: 90%;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    /* border: 1px solid #222; */
    /* background-color: aqua; */
    overflow: scroll;
    border-radius: 30px;
    ::-webkit-scrollbar {
	display:none 
}
    /* box-shadow: 2px 2px 5px #dbdbdb; */
`;

export const listLayout = css`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* gap: 15px; */
    padding: 0;
    box-sizing: border-box;

`;

export const list = css`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    margin: 10px ;
    cursor: pointer;
    padding: 1em;
    background: rgb(43, 43, 43);
    position: relative;
    color: white;
    border-radius: 15px;
`;


