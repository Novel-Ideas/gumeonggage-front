/** @jsxImportSource @emotion/react */
import * as s from "./style";

function FeedbackOkPage() {
    return (
        <div css={s.layout}>
            <div css={s.thankyouComment}>
                <h1>후기를 남겨 주셔서 감사합니다!</h1>
            </div>
            <div css={s.checkButton}>
                <button>확인</button>
            </div>
        </div>
    );
}

export default FeedbackOkPage;