/** @jsxImportSource @emotion/react */
import * as s from "./style";

function FeedbackWritePage() {
    return (
        <div>
            <div css={s.feedbackTitle}>
                <h1>후기 작성하기</h1>
                    <div css={s.feedbackQuestion}>
                        <h1>음식이 싱겁진 않았나요?</h1>
                    </div>
                    <div css={s.feedbackContents}>
                        <input type="radio" name="싱거움" id="" disabled={false}/>
                        <input type="radio" name="적당함" id="" disabled={false}/>
                        <input type="radio" name="간이 셈" id="" disabled={false}/>
                    </div>
                    <div css={s.feedbackQuestion}>
                        <h1>음식이 싱겁진 않았나요?</h1>
                    </div>
                    <div css={s.feedbackContents}>
                        <input type="radio" name="싱거움" id="" disabled={false}/>
                        <input type="radio" name="적당함" id="" disabled={false}/>
                        <input type="radio" name="간이 셈" id="" disabled={false}/>
                    </div>
                    <div css={s.feedbackQuestion}>
                        <h1>음식이 싱겁진 않았나요?</h1>
                    </div>
                    <div css={s.feedbackContents}>
                        <input type="radio" name="싱거움" id="" disabled={false}/>
                        <input type="radio" name="적당함" id="" disabled={false}/>
                        <input type="radio" name="간이 셈" id="" disabled={false}/>
                    </div>
                <button css={s.checkButton}>확인</button>
            </div>
        </div>
    );
}

export default FeedbackWritePage;