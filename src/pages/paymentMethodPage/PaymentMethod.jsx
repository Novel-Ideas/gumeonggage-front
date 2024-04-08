/** @jsxImportSource @emotion/react */
import * as s from "./style";
import PageModal from "../../components/pageComponents/pageModal/PageModal";
import { useNavigate } from "react-router-dom";

function PaymentMethod() {
    const navigate = useNavigate();
    const handleCancelClick = () => {
        navigate("/menu");
    };
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>
                        결제방법<span css={s.blackText}>을 선택하세요.</span>
                    </h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <button css={s.methodBox}></button>
                        <h1>카드결제</h1>
                    </div>
                    <div css={s.methodLayout}>
                        <button css={s.methodBox}></button>
                        <h1>더치페이</h1>
                    </div>
                </div>
                <div css={s.buttonBox} onClick={handleCancelClick}>
                    <button css={s.cancel}>
                        <span css={s.buttonX}>x</span> 취소
                    </button>
                </div>
            </div>
        </PageModal>
    );
}

export default PaymentMethod;
