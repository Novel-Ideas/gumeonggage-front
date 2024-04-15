/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCircle } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";
import AdminPageLayout from '../../../components/pageComponents/adminPageLayout/AdminPageLayout';
import { getFeedbackRequest } from "../../../apis/api/feedback";
import { useEffect, useState } from "react";

function AdminFeedbackPage(props) {
    const [ feedbackList, setFeedbackList ] = useState([]);

    const searchFeedbackQuery = useQuery(["feedbackQuery"], getFeedbackRequest, {
        onSuccess: (response) => {
            setFeedbackList(response.data)
    },
    onError: (error) => {
        console.log(error);
    },
    retry: 0,
    refetchOnWindowFocus: false,
})

console.log(feedbackList)

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>피드백 조회</div>
                </div>
                <div css={s.searchBoxLayout}>
                    <div css={s.searchBox}>
                        <div css={s.top}>
                            <FaCircle css={s.circle}/>
                            <FaCircle css={s.circle}/>
                            <FaCircle css={s.circle}/>
                        </div>
                        <div css={s.searchLayout}>
                            <div css={s.search}>
                                <ul css={s.askTitle}>
                                        <li>Id</li>
                                        <li>맛</li>
                                        <li>양</li>
                                        <li>친절도</li>
                                        <li>날짜</li>
                                </ul>
                                <div css={s.listLayout}>           
                                        {
                                            feedbackList.map((feedback) => (
                                                <ul css={s.askList}>
                                                    <li>{feedback.feedbackId}</li>
                                                    <li>{feedback.answer1 === 1 ? "맛없음" : feedback.answer1 === 2 ? "보통" : "맛있음"}</li>
                                                    <li>{feedback.answer2 === 1 ? "적음" : feedback.answer2 === 2 ? "적당함" : "많음"}</li>
                                                    <li>{feedback.answer3 === 1 ? "불친절함" : feedback.answer2 === 2 ? "보통" : "친절함"}</li>
                                                    <li>{feedback.createDate}</li>
                                                </ul>
                                            ))
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminFeedbackPage;