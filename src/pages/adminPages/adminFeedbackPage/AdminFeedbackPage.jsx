/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCircle } from "react-icons/fa";
import { useMutation } from "react-query";
import AdminPageLayout from '../../../components/pageComponents/adminPageLayout/AdminPageLayout';
import { getFeedbackRequest } from "../../../apis/api/feedback";
import { useEffect, useState } from "react";

function AdminFeedbackPage(props) {
    const [ feedbackList, SetFeedbackList ] = useState([]);

    const getFeedbackMutation = useMutation({
        mutationKey: "getFeedbackMutation",
        mutationFn: getFeedbackRequest,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                console.log(response.data);
                getFeedbackMutation(response.data);
            }
        },
    });

    useEffect(() => {
        getFeedbackMutation.mutate();
    },[])

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
                                    <li>질문1</li>
                                    <li>질문2</li>
                                    <li>질문3</li>
                                    <li>날짜</li>
                                </ul>
                                <div css={s.listLayout}>
                                        {
                                            feedbackList.map((feedback) =>                                           
                                            <ul css={s.askList} key={feedback.feedbackId}>
                                                <li>{feedback.feedbackId}</li>
                                                <li>{feedback.answer1}</li>
                                                <li>{feedback.answer2}</li>
                                                <li>{feedback.answer3}</li>
                                                <li>{feedback.updateDate}</li>
                                            </ul>
                                            )
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