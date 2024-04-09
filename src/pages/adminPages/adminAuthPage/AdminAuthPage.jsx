/**@jsxImportSource @emotion/react */
import * as s from "./style";

function AdminAuthPage() {
    
    return (
        <div css={s.layout}>
            <div>
            <h1>로그인</h1>
            <div css={s.inputInfo}>
                <input type="text" id="id" name="아이디" />
            </div>
            <div css={s.inputInfo}>
                <input type="text" id="password" name="비밀번호" />
            </div>
                <div>
                    <ul>
                        <a href="">회원가입</a>
                    </ul>
                    <ul>
                        <a href="">비밀번호 변경</a>
                    </ul>
                </div>
                <div css={s.loginButton}>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default AdminAuthPage;