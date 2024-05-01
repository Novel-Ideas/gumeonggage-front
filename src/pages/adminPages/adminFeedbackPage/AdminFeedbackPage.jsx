/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCircle } from "react-icons/fa";
import { useQuery } from "react-query";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import {
    getFeedbackCountRequest,
    getFeedbackRequest,
} from "../../../apis/api/feedback";
import { useState } from "react";
import AdminMainPageFeedback from "../../../components/adminMainPageFeedback/AdminMainPageFeedback";
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Label,
    LabelList,
    Legend,
    Cell,
} from "recharts";

function AdminFeedbackPage(props) {
    const [feedbackCount, setfeedbackCount] = useState([]);
    const COLORS1 = ["#e9b78b", "#776858", "#ac8a68"];
    const COLORS2 = ["#7cc26a", "#a3ce80", "#407a3e"];
    const COLORS3 = ["#51829B", "#9BB0C1", "#85b1e2"];

    const feedbackCountQuery = useQuery(
        ["feedbackCountQuery"],
        getFeedbackCountRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response.data);
                setfeedbackCount(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const data01 = [
        {
            name: "맛없음",
            value: feedbackCount[0]?.q1a1,
        },
        {
            name: "보통",
            value: feedbackCount[0]?.q1a2,
        },
        {
            name: "맛있음",
            value: feedbackCount[0]?.q1a3,
        },
    ];
    const data02 = [
        {
            name: "적음",
            value: feedbackCount[0]?.q2a1,
        },
        {
            name: "적당함",
            value: feedbackCount[0]?.q2a2,
        },
        {
            name: "많음",
            value: feedbackCount[0]?.q2a3,
        },
    ];
    
    const data03 = [
        {
            name: "불친절함",
            value: feedbackCount[0]?.q3a1,
        },
        {
            name: "보통",
            value: feedbackCount[0]?.q3a2,
        },
        {
            name: "친절함",
            value: feedbackCount[0]?.q3a3,
        },
    ];

    const [feedbackList, setFeedbackList] = useState([]);

    const searchFeedbackQuery = useQuery(
        ["feedbackQuery"],
        getFeedbackRequest,
        {
            onSuccess: (response) => {
                setFeedbackList(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

    const getMaxValueName = (data) => {
        let maxValue = 0;
        let maxName = '';
        data.forEach(item => {
          if (item.value > maxValue) {
            maxValue = item.value;
            maxName = item.name;
          }
        });
        return maxName;
      };

      const getDesiredText = (data) => {
        const maxName = getMaxValueName(data);
        let desiredText = '';
        switch (maxName) {
          case '맛없음':
            desiredText = '음식이 맛없어요';
            break;
          case '보통':
            desiredText = '음식이 보통이에요';
            break;
          case '맛있음':
            desiredText = '음식이 맛있어요';
            break;
          case '적음':
            desiredText = '양이 적어요';
            break;
          case '적당함':
            desiredText = '양이 적당해요';
            break;
          case '많음':
            desiredText = '양이 많아요';
            break;
          case '불친절함':
            desiredText = '서비스가 불친절해요';
            break;
          case '친절함':
            desiredText = '서비스가 친절해요';
            break;
          default:
            desiredText = '상태를 정의할 수 없어요';
        }
        return desiredText;
      };

        const desiredTextData01 = getDesiredText(data01);
        const desiredTextData02 = getDesiredText(data02);
        const desiredTextData03 = getDesiredText(data03);

    // console.log(feedbackList);

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>피드백 조회</div>
                </div>
                <div css={s.feedbackGraphLayout}>
                    <div css={s.commentBox}>
                        <ResponsiveContainer
                            width="33%"
                            height="100%"
                            display="flex"
                        >
                            <PieChart width={500} height={250}>
                                <Pie
                                    data={data01}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    fill="#758e97"
                                    label
                                >
                                    {data01.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                COLORS1[index % COLORS1.length]
                                            }
                                        />
                                    ))}
                                </Pie>
                                <Legend height={35} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div css={s.comment}>
                            <div css={s.textBox}>{desiredTextData01}</div>
                        </div>
                    </div>
                    <div css={s.commentBox}>
                        <ResponsiveContainer
                            width="33%"
                            height="100%"
                            display="flex"
                        >
                            <PieChart width={500} height={250}>
                                <Pie
                                    data={data02}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    fill="#eba89c"
                                    label
                                >
                                    {data02.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                COLORS2[index % COLORS2.length]
                                            }
                                        />
                                    ))}
                                </Pie>
                                <Legend height={35} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div css={s.comment}>
                            <div css={s.textBox}>{desiredTextData02}</div>
                        </div>
                    </div>
                    <div css={s.commentBox}>
                        <ResponsiveContainer
                            width="33%"
                            height="100%"
                            display="flex"
                        >
                            <PieChart width={500} height={250}>
                                <Pie
                                    data={data03}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    fill="#87cca1"
                                    label
                                >
                                    {data03.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                COLORS3[index % COLORS3.length]
                                            }
                                        />
                                    ))}
                                </Pie>
                                <Legend height={35} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div css={s.comment}>
                            <div css={s.textBox}>{desiredTextData03}</div>
                        </div>
                    </div>
                    <div css={s.searchBoxLayout}>
                        <div css={s.searchBox}>
                            <div css={s.top}>
                                <FaCircle css={s.circle} />
                                <FaCircle css={s.circle} />
                                <FaCircle css={s.circle} />
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
                                        {feedbackList.map((feedback, index) => (
                                            <ul
                                                key={feedback.feedbackId}
                                                css={s.askList}
                                            >
                                                <li>{index + 1}</li>
                                                <li>
                                                    {feedback.answer1 === 1
                                                        ? "맛없음"
                                                        : feedback.answer1 === 2
                                                        ? "보통"
                                                        : "맛있음"}
                                                </li>
                                                <li>
                                                    {feedback.answer2 === 1
                                                        ? "적음"
                                                        : feedback.answer2 === 2
                                                        ? "적당함"
                                                        : "많음"}
                                                </li>
                                                <li>
                                                    {feedback.answer3 === 1
                                                        ? "불친절함"
                                                        : feedback.answer2 === 2
                                                        ? "보통"
                                                        : "친절함"}
                                                </li>
                                                <li>{feedback.createDate}</li>
                                            </ul>
                                        ))}
                                    </div>
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
