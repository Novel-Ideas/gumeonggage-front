/** @jsxImportSource @emotion/react */
import PageLayout from "../../../components/pageComponents/PageLayout";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

function FeedbackWritePage() {
    const navigate = useNavigate();
    const handleSubmitClick = () => {
        navigate("/feedback/ok");
    };
    return (
        <PageLayout>
            <div css={s.layout}>
                <h1>후기 작성하기</h1>
                <div css={s.feedbackLayout}>
                    <div css={s.feedbackBox}>
                        <div css={s.feedbackContents}>
                            <h1>음식이 싱겁진 않았나요?</h1>
                            <div css={s.radioButton}>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="watery"
                                />
                                <label for="watery">싱거움</label>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="proper1"
                                />
                                <label for="proper1">적당함</label>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="salty"
                                />
                                <label for="salty">간이 셈</label>
                            </div>
                        </div>
                        <div css={s.feedbackContents}>
                            <h1>음식의 양이 적당했나요?</h1>
                            <div css={s.radioButton}>
                                <input type="radio" name="amount" id="little" />
                                <label for="little">적음</label>
                                <input
                                    type="radio"
                                    name="amount"
                                    id="proper2"
                                />
                                <label for="proper2">적당함</label>
                                <input type="radio" name="amount" id="many" />
                                <label for="many">많음</label>
                            </div>
                        </div>
                        <div css={s.feedbackContents}>
                            <h1>직원들이 친절했나요?</h1>
                            <div css={s.radioButton}>
                                <input type="radio" name="kind" id="unkind" />
                                <label for="unkind">불친절함</label>
                                <input type="radio" name="kind" id="proper3" />
                                <label for="proper3">보통</label>
                                <input type="radio" name="kind" id="kind" />
                                <label for="kind">친절함</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button css={s.checkButton} onClick={handleSubmitClick}>
                    확인
                </button>
            </div>
        </PageLayout>
    );
}

export default FeedbackWritePage;
