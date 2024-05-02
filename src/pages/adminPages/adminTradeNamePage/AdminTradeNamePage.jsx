/** @jsxImportSource @emotion/react */
import { FaArrowRight } from "react-icons/fa";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import * as s from "./style";
import { useState } from "react";
import { useMutation } from "react-query";
import { editTradeNameRequest } from "../../../apis/api/tradeName";

function AdminTradeNamePage() {

    const [ tradeName, setTradeName ] = useState("");

    const editTradeNameMutation = useMutation({
        mutationKey: "editTradeNameMutation",
        mutationFn: editTradeNameRequest,
        onSuccess: response => {
            setTradeName(() => response.data);
            window.location.reload("/");
        },
        onError: error => {
            console.log(error);
            alert("변경할 매장 이름 확인이 필요합니다")
        }
    })

    const handleOnClick = () => {
        editTradeNameMutation.mutate({
            tradeName: tradeName
        })
    }
    
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>상호명 변경하기</div>
                </div>
                <div css={s.contatiner}>
                    <div css={s.inputLayout}>
                        <div>
                            <h1>변경 전 매장명</h1>
                            <h1>: 구멍가게</h1>
                        </div>
                    </div>
                    <div css={s.arrowBox}>
                        <div css={s.arrow}>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div css={s.inputLayout}>
                        <div>
                            <h1>변경 후 매장명</h1>
                            <input type="text" css={s.input}/>
                        </div>
                    </div>
                </div>
                <div css={s.buttonLayout}>
                    <button css={s.button} onClick={() => handleOnClick()}>저장</button>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminTradeNamePage;