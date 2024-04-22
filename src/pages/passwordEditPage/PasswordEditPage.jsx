/**@jsxImportSource @emotion/react */
import { editPasswordRequest } from "../../apis/api/editPassword";
import AuthPageInput from "../../components/authPageInput/AuthPageInput";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useEditPassword } from "../../hooks/useEditPassword";
import { useMutation } from "react-query";

function PasswordEditPage() {
    useAuthCheck();
    const [oldPassword, handleOldPassword, oldMessage, setOld, setOldMessage] =
        useEditPassword("oldPassword");
    const [newPassword, handleNewPassword, newMessage, setNew, setNewMessage] =
        useEditPassword("newPassword");
    const [
        newPasswordCheck,
        handleNewPasswordCheck,
        newCheckMessage,
        setNewCheck,
        setNewCheckMessage,
    ] = useEditPassword("newPasswordCheck");

    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: editPasswordRequest,
        onSuccess: (response) => {
            alert("비밀번호를 정상적으로 변경하였습니다.");
            localStorage.removeItem("AccessToken");
            window.location.replace("/");
        },
        onError: (error) => {
            if (error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                setOldMessage(null);
                setNewMessage(null);
                setNewCheckMessage(null);
                for (let [k, v] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v,
                    };
                    if (k === "oldPassword") {
                        setOldMessage(() => message);
                    }
                    if (k === "newPassword") {
                        setNewMessage(() => message);
                    }
                    if (k === "newPasswordCheck") {
                        setNewCheckMessage(() => message);
                    }
                }
            }
        },
    });

    const handleEditsubmitClick = () => {
        editPasswordMutation.mutate({
            oldPassword,
            newPassword,
            newPasswordCheck,
        });
    };

    return (
        <div>
            <h1>비밀번호변경</h1>
            <AuthPageInput
                type={"password"}
                value={oldPassword}
                onChange={handleOldPassword}
                placeholder={"현재 비밀번호를 입력하세요."}
                message={oldMessage}
            />
            <AuthPageInput
                type={"password"}
                value={newPassword}
                onChange={handleNewPassword}
                placeholder={"새로운 비밀번호를 입력하세요."}
                message={newMessage}
            />
            <AuthPageInput
                type={"password"}
                value={newPasswordCheck}
                onChange={handleNewPasswordCheck}
                placeholder={"새로운 비밀번호를 확인하세요."}
                message={newCheckMessage}
            />
            <button onClick={handleEditsubmitClick}>비밀번호 변경하기</button>
        </div>
    );
}

export default PasswordEditPage;
