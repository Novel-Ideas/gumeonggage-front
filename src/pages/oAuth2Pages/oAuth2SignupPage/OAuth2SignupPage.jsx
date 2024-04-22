/**@jsxImportSource @emotion/react */
import * as s from "./style";
import AuthPageInput from "../../../components/authPageInput/AuthPageInput";
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";

function OAuth2SignupPage(props) {
    return (
        <PageLayout>
            <div css={s.layout}>            
                <div css={s.inputBox}>
                    <h1>회원가입</h1>
                    <div css={s.input}>
                        <input type="text" id="username" name="username" placeholder="사용자 이름"/>
                    </div>
                    <div css={s.input}>
                        <input type="password" id="password" name="password" placeholder="비밀번호"/>
                    </div>
                    <div css={s.input}>
                        <input type="password" id="checkpassword" name="checkpassword" placeholder="비밀번호 확인"/>
                    </div>
                    <div css={s.input}>
                        <input type="text" id="name" name="name" placeholder="성명"/>
                    </div>
                    <div css={s.input}>
                        <input type="text" id="email" name="email" placeholder="이메일"/>
                    </div>
                </div>
                <div>
                    <button css={s.registrationButton}>가입하기</button>
                </div>
            </div>
        </PageLayout>
    );
}

export default OAuth2SignupPage;