/** @jsxImportSource @emotion/react */
import * as s from "./style";

function PaymentMethod() {
    return (
        <div css={s.layout}>
            <div css={s.textbox}>
                <h1 css={s.text}>
                    결제방법<span css={s.blackText}>을 선택하세요.</span>
                </h1>
            </div>
            <div css={s.paybox}>
                <div css={s.methodLayout}>
                    <div css={s.methodBox}></div>
                    <h1>카드결제</h1>
                </div>
                <div css={s.methodLayout}>
                    <div css={s.methodBox}></div>
                    <h1>더치페이</h1>
                </div>
            </div>
            <div css={s.buttonBox}>
                <button css={s.cancle}>
                    <span css={s.buttonX}>x</span> 취소
                </button>
            </div>
        </div>
    );
}

export default PaymentMethod;
