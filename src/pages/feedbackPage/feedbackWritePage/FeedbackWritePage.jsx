/** @jsxImportSource @emotion/react */
import { useState } from "react";
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { addFeedbackRequest } from "../../../apis/api/feedback";
import useFeedback from "../../../hooks/useFeedback";

function FeedbackWritePage() {
    const [ feedbackList, setFeedbackList ] = useState([]);
    const navigate = useNavigate();

    const feedbackMutation = useMutation({
        mutationKey: "feedbackMutation",
        mutationFn: addFeedbackRequest,
        retry:0,
        onSuccess: (response) => {
            alert("등록완료")
            navigate("/menu/feedback/ok");
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const handleFeedbackSubmitClick = () => {
        feedbackMutation.mutate()
    }

    const handleChange = (e) => {
        setFeedbackList(e.target.value)
        console.log(e.target.value)
    }

    return (
        <PageLayout>
            <div css={s.layout}>
                <h1>후기 작성하기</h1>
                <div css={s.feedbackLayout}>
                    <div css={s.feedbackBox}>
                        <div css={s.feedbackContents}>
                            <h1>음식의 맛은 어땠나요?</h1>
                            <div css={s.radioButton}>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="watery"
                                    onChange={() => handleChange()}
                                />
                                <label for="watery">맛없음</label>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="proper1"
                                    // value={answer1.value}
                                    onChange={handleChange}
                                />
                                <label for="proper1">보통</label>
                                <input
                                    type="radio"
                                    name="salinity"
                                    id="salty"
                                    // value={answer1.value}
                                    onChange={handleChange}
                                />
                                <label for="salty">맛있음</label>
                            </div>
                        </div>
                        <div css={s.feedbackContents}>
                            <h1>음식의 양이 적당했나요?</h1>
                            <div css={s.radioButton}>
                                <input type="radio" name="amount" id="little" 
                                //   value={answer2.value}
                                  onChange={handleChange}
                                />
                                <label for="little">적음</label>
                                <input
                                    type="radio"
                                    name="amount"
                                    id="proper2"
                                    // value={answer2.value}
                                    onChange={handleChange}
                                />
                                <label for="proper2">적당함</label>
                                <input type="radio" name="amount" id="many" 
                                //    value={answer2.value}
                                   onChange={handleChange}
                                />
                                <label for="many">많음</label>
                            </div>
                        </div>
                        <div css={s.feedbackContents}>
                            <h1>직원들이 친절했나요?</h1>
                            <div css={s.radioButton}>
                                <input type="radio" name="kind" id="unkind" 
                                //    value={answer3.value}
                                   onChange={handleChange}
                                />
                                <label for="unkind">불친절함</label>
                                <input type="radio" name="kind" id="proper3" 
                                //    value={answer3.valu}
                                   onChange={handleChange}
                                />
                                <label for="proper3">보통</label>
                                <input type="radio" name="kind" id="kind" 
                                //    value={answer3.valu}
                                   onChange={handleChange}
                                />
                                <label for="kind">친절함</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button css={s.checkButton} onClick={handleFeedbackSubmitClick}>
                    확인
                </button>
            </div>
        </PageLayout>
    );
}

export default FeedbackWritePage;
