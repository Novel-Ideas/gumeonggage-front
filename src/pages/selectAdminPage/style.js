import { css } from "@emotion/react"; 

export const layout = css`
    position: relative;
    width: 100%s;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const selectWay = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 4px solid rgb(252, 10, 86);
    border-radius: 35px;
    width: 450px;
    height: 550px;
    margin: 50px;
    background-color: rgb(252, 10, 86);
    color: white;
    font-size: 120px;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 5px 5px #898989ff;
    cursor: pointer;

    & > h1 {
        font-size: 70px;
    }

    &:hover {
        background-color: white;
        color: rgb(252, 10, 86);
    }
`;