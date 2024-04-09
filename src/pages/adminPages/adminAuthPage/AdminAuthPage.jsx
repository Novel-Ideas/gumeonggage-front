/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";
import { useInput } from "../../../hooks/useInput";
import { signinRequest } from "../../../apis/api/signin";

function AdminAuthPage() {
    const [username, handleOnChangeUsername] = useInput();
    const [password, handleOnChangePassword] = useInput();
    const handleSigninClick = () => {
        signinRequest({
            username,
            password,
        })
            .then((response) => {
                const accessToken = response.data;
                localStorage.setItem("AccessToken", accessToken);
                
            })
            .catch((error) => {
                alert(error.response.data);
                console.log(error);
            });
    };
    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.signinBox}>
                    <h1>로그인</h1>
                    <div css={s.inputInfo}>
                        <input
                            type="text"
                            id="id"
                            name="username"
                            placeholder="아이디를 입력하세요"
                            value={username}
                            onChange={handleOnChangeUsername}
                        />
                    </div>
                    <div css={s.inputInfo}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={handleOnChangePassword}
                        />
                    </div>
                    <div></div>
                </div>
                <button css={s.loginButton} onClick={handleSigninClick}>
                    로그인
                </button>
            </div>
        </PageLayout>
    );
}

export default AdminAuthPage;
