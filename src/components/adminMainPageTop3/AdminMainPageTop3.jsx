/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import { FaCrown } from "react-icons/fa6";

function AdminMainPageTop3(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h1 css={s.font}><FaCrown css={s.icon}/> 1위</h1>
                <div css={s.top3}>img</div>
                <h1 css={s.menu}>치즈버거</h1>
            </div>
            <div css={s.container}>
                <h1 css={s.font}>2위</h1>
                <div css={s.top3}>img</div>
                <h1 css={s.menu}>치즈버거</h1>
            </div>
            <div css={s.container}>
                <h1 css={s.font}>3위</h1>
                <div css={s.top3}>img</div>
                <h1 css={s.menu}>치즈버거</h1>
            </div>
        </div>
    );
}

export default AdminMainPageTop3;