/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";
import AuthPageInput from "../../../components/authPageInput/AuthPageInput";
import { useInput } from "../../../hooks/useInput";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { oAuth2SignupRequest } from "../../../apis/api/authApi";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

function OAuth2SignupPage(props) {
    const [searchParams] = useSearchParams();
    const [username, userNameChange, , usernameMessage, setUsernameMessage] =
        useInput("username");
    const [password, passswordChange, , passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [name, nameChange, , nameMessage] = useInput("name");
    const [email, emailChange, , emailMessage] = useInput("email");
    const [checkPasswordMessage, setCheckPasswordMessage] = useState(null);

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    useEffect(() => {
        if (!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if (checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: "",
                };
            });
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다.",
                };
            });
        }
    }, [checkPassword, password]);

    const oAuth2SignupMutation = useMutation({
        mutationKey: "oAuth2SignupMutation",
        mutationFn: oAuth2SignupRequest,
        onSuccess: (response) => {
            console.log(response.data);
            Toast.fire({
                icon: "success",
                title: "회원가입이 완료되었습니다.",
            });
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        },
        onError: (error) => {
            Toast.fire({
                icon: "error",
                title: Object.values(error.response.data).join("\n"),
            });
        },
    });

    const handlerSubmitClick = () => {
        oAuth2SignupMutation.mutate({
            username: username,
            password: password,
            name: name,
            email: email,
            oauth2Name: searchParams.get("name"),
            providerName: searchParams.get("provider"),
        });
    };

    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.signupBox}>
                    <h1>회원가입</h1>
                    <div css={s.inputInfo}>
                        <AuthPageInput
                            type={"text"}
                            name={"username"}
                            placeholder={"사용자이름"}
                            value={username}
                            onChange={userNameChange}
                            message={usernameMessage}
                        />
                        <AuthPageInput
                            type={"password"}
                            name={"password"}
                            placeholder={"비밀번호"}
                            value={password}
                            onChange={passswordChange}
                            message={passwordMessage}
                        />
                        <AuthPageInput
                            type={"password"}
                            name={"checkPassword"}
                            placeholder={"비밀번호 확인"}
                            value={checkPassword}
                            onChange={checkPasswordChange}
                            message={checkPasswordMessage}
                        />
                        <AuthPageInput
                            type={"text"}
                            name={"name"}
                            placeholder={"성명"}
                            value={name}
                            onChange={nameChange}
                            message={nameMessage}
                        />
                        <AuthPageInput
                            type={"text"}
                            name={"email"}
                            placeholder={"이메일"}
                            value={email}
                            onChange={emailChange}
                            message={emailMessage}
                        />
                    </div>
                </div>
                <div>
                    <button css={s.signupButton} onClick={handlerSubmitClick}>
                        가입하기
                    </button>
                </div>
            </div>
        </PageLayout>
    );
}

export default OAuth2SignupPage;
