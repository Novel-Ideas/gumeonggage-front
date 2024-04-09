/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";

function AdminAuthPage() {
    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.signinBox}>
                    <h1>로그인</h1>
                    <div css={s.inputInfo}>
                        <input type="text" id="id" name="아이디" />
                    </div>
                    <div css={s.inputInfo}>
                        <input type="password" id="password" name="비밀번호" />
                    </div>
                    <div></div>
                </div>
                <button css={s.loginButton}>로그인</button>
            </div>
        </PageLayout>
    );
}

export default AdminAuthPage;
