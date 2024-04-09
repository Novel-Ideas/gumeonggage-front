/** @jsxImportSource @emotion/react */
import * as s from "./style";

function PointCheck(props) {
    return (
        <div css={s.layout}>
            <h1>회원정보 없음</h1>
            <div css={s.signupAndAccumul}>
                <button>가입하고 적립하시겠습니까</button>
            </div>
            <div css={s.rejectButton}>
                <button>안 할래요</button>
            </div>
        </div>
    );
}

export default PointCheck;