/**@jsxImportSource @emotion/react */
import * as s from "./style";

function AdminSignupPage() {
    return (
        <div css={s.layout}>
            <h1>회원가입</h1>
            <div css={s.inputInfo}>
                <input type="text" id="id" name="id" placeholder="아이디"/>
            </div>
            <div css={s.inputInfo}>
                <input type="text" id="password" name="password" placeholder="비밀번호"/>
            </div>
            <div css={s.inputInfo}>
                <input type="text" id="passwordcheck" name="passwordcheck" placeholder="비밀번호 확인"/>
            </div>
            <div css={s.inputInfo}>
                <input type="text" id="name" name="name" placeholder="이름"/>
            </div>
            <div css={s.inputInfo}>
                <input type="text" id="email" name="email" placeholder="이메일"/>
            </div>
            <div css={s.signupButton}>
                <button>가입하기</button>
            </div>
        </div>
    );
}

export default AdminSignupPage;