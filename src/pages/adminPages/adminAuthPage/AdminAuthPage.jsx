/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";
import { useInput } from "../../../hooks/useInput";
import { signinRequest } from "../../../apis/api/signin";
import { useQueryClient } from "react-query";
import instance from "../../../apis/utils/instance";

function AdminAuthPage() {
    const [username, handleOnChangeUsername] = useInput();
    const [password, handleOnChangePassword] = useInput();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    console.log(principalData);

    const handleSigninClick = () => {
        signinRequest({
            username,
            password,
        })
            .then((response) => {
                const accessToken = response.data;
                localStorage.setItem("AccessToken", accessToken);
                window.location.href = "/";
            })
            .catch((error) => {
                alert(error.response.data);
                console.log(error);
            });
    };

    const handleStoreButtonClick = () => {
        window.location.href = "/selectmenu";
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        // 요청 시 낚아채서 해당 함수 실행
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.refetchQueries("principalQuery");
        alert("로그아웃 되었습니다.");
        window.location.replace("/");
    };

    return (
        <PageLayout>
            <div css={s.layout}>
                {!principalData ? (
                    <>
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
                        </div>
                        <button css={s.loginButton} onClick={handleSigninClick}>
                            로그인
                        </button>
                    </>
                ) : (
                    <>
                        <div css={s.signinBox}>
                            <div css={s.accountInfo}>
                                {principalData.data.name}가게{" "}
                                {principalData.data.username}사장님
                            </div>
                            <button
                                css={s.storeButton}
                                onClick={handleStoreButtonClick}
                            >
                                매장관리
                            </button>
                        </div>
                        <button css={s.loginButton} onClick={handleLogoutClick}>
                            로그아웃
                        </button>
                    </>
                )}
            </div>
        </PageLayout>
    );
}

export default AdminAuthPage;
