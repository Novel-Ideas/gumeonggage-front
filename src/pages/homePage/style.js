import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const content = css`
    display: flex; /* Flexbox를 사용하여 내부 요소를 가로로 배열 */
    flex-direction: column; /* 요소를 세로로 배열 */
    align-items: center; /* 세로 중앙 정렬 */
`;

export const imgbox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
`;

export const text = css`
    font-size: 50px;
    font-weight: 700;
`;
