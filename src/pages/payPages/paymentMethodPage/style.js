import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const textbox = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const text = css`
    color: red;
    font-size: 60px;
`;

export const blackText = css`
    color: black;
`;

export const paybox = css`
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const methodLayout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const methodBox = css`
    border-radius: 30px;
    width: 350px;
    height: 250px;
    box-shadow: 5px 5px 5px 5px #898989ff;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: none;

    & > img {
        height: 90%;
    }
`;
export const methodBox2 = css`
    border-radius: 30px;
    width: 350px;
    height: 250px;
    box-shadow: 5px 5px 5px 5px #898989ff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 5px solid rgb(255, 230, 3);

    & > img {
        height: 110%;
    }
`;

// export const kakaoButton = css`
//     position: absolute;
//     box-sizing: border-box;
//     width: 350px;
//     height: 250px;
//     border-radius: 30px;
//     right: 50px;
//     bottom: 110px;
//     border: 5px solid rgb(255, 230, 3);
// `

export const buttonBox = css`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const cancel = css`
    border: 2px solid rgb(252, 10, 86);
    border-radius: 15px;
    background-color: white;
    color: rgb(252, 10, 86);
    width: 280px;
    height: 70px;
    font-size: 30px;
    font-weight: 700;
    box-shadow: 5px 5px 5px #898989ff;

    &:active {
        background-color: rgb(252, 10, 86);
        color: white;
    }
`;
