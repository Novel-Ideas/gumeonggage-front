/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import { FaCircle } from "react-icons/fa";
import { useQuery } from "react-query";
import { getPaymentsRequest } from "../../../apis/api/salesApi";
import { useEffect, useState } from "react";

function AdminPayPage(props) {
    const [payData, setPayData] = useState({});

    const paymentsQuery = useQuery(
        ["paymentsQuery"],
        () => getPaymentsRequest,
        {
            retry: 5,
            refetchOnWindowFocus: false,
            onSuccess: async (response) => {
                setPayData(await response);
            },
            onError: (error) => {
                paymentsQuery.refetch();
            },
        }
    );

    const dateFormat = (date) => {
        let month = date?.getMonth() + 1;
        let day = date?.getDate();
        let hour = date?.getHours();
        let minute = date?.getMinutes();
        let second = date?.getSeconds();

        month = month >= 10 ? month : "0" + month;
        day = day >= 10 ? day : "0" + day;
        hour = hour >= 10 ? hour : "0" + hour;
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;

        return (
            date?.getFullYear() +
            "-" +
            month +
            "-" +
            day +
            " " +
            hour +
            ":" +
            minute +
            ":" +
            second
        );
    };
    
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>결제 내역 조회</div>
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
                                    <li>결제상태</li>
                                    <li>주문명</li>
                                    <li>결제대행사</li>
                                    <li>결제금액</li>
                                    <li>상태 승인 시각</li>
                                </ul>
                                <div css={s.listLayout}>
                                    {payData?.data?.items.map((data) => (
                                        <ul key={data.id} css={s.listContainer}>
                                            <li
                                                style={{
                                                    color:
                                                        data.status === "FAILED"
                                                            ? "red"
                                                            : "green",
                                                }}
                                            >
                                                {data.status === "FAILED"
                                                    ? "결제실패"
                                                    : "결제성공"}
                                            </li>
                                            <li>{data.orderName}</li>
                                            <li>{data?.channel?.name}</li>
                                            <li>{data.amount.total}원</li>
                                            <li>
                                                {dateFormat(
                                                    new Date(
                                                        new Date(
                                                            data?.updatedAt
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                timeZone:
                                                                    "Asia/Seoul",
                                                            }
                                                        )
                                                    )
                                                )}
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminPayPage;
