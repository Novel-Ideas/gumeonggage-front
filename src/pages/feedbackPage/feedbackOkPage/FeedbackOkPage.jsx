/** @jsxImportSource @emotion/react */
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";
import * as s from "./style";

function FeedbackOkPage() {
    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.box}>
                    <div css={s.thankyouComment}>
                        <h1>후기를 남겨 주셔서 감사합니다!</h1>
                    </div>
                </div>
                <button css={s.checkButton}>확인</button>
            </div>
        </PageLayout>
    );
}

export default FeedbackOkPage;
