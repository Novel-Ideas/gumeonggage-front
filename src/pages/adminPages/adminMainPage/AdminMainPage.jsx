/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import AdminMainPageTop3 from "../../../components/adminMainPageTop3/AdminMainPageTop3";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getTop3Request } from "../../../apis/api/menuList";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function AdminMainPage() {
    const [lanking, setLanking] = useState([]);

    const getLankingMutation = useMutation({
        mutationKey: "getLankingMutation",
        mutationFn: getTop3Request,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                console.log(response.data);
                setLanking(response.data);
            }
        },
    });

    const data = [
        {
            name: "1월",
            uv: 2400,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "2월",
            uv: 3000,
            pv: 3000,
            amt: 3000,
        },
        {
            name: "3월",
            uv: 2000,
            pv: 2000,
            amt: 2000,
        },
        {
            name: "4월",
            uv: 2780,
            pv: 2780,
            amt: 2780,
        },
        {
            name: "5월",
            uv: 1890,
            pv: 1890,
            amt: 1890,
        },
        {
            name: "6월",
            uv: 2390,
            pv: 2390,
            amt: 2390,
        },
        {
            name: "7월",
            uv: 3490,
            pv: 3490,
            amt: 3490,
        },
        {
            name: "8월",
            uv: 1490,
            pv: 1490,
            amt: 1490,
        },
        {
            name: "9월",
            uv: 2425,
            pv: 2425,
            amt: 2425,
        },
        {
            name: "10월",
            uv: 3490,
            pv: 3490,
            amt: 3490,
        },
        {
            name: "11월",
            uv: 3490,
            pv: 3490,
            amt: 3490,
        },
        {
            name: "12월",
            uv: 3490,
            pv: 3490,
            amt: 3490,
        },
    ];

    useEffect(() => {
        getLankingMutation.mutate();
    }, []);

    useAuthCheck();
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.boxLayout}>
                    <div css={s.fontLayout}>
                        <h1>Sales</h1>
                        <h1>매출</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            <ResponsiveContainer width={800} height="90%">
                                <ComposedChart
                                    // width={730}
                                    // height={250}
                                    data={data}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <Bar
                                        dataKey="pv"
                                        barSize={20}
                                        fill="#8abdf3"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="uv"
                                        stroke="#ff7300"
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div css={s.boxLayout}>
                    <div css={s.fontLayout}>
                        <h1>TOP3</h1>
                        <h1>랭킹</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            {lanking.map((menu, index) => (
                                <AdminMainPageTop3
                                    key={menu.menuId}
                                    img={menu.menu?.menuImgUrl}
                                    menuName={menu.menu?.menuName}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div css={s.fontLayout}>
                        <h1>Feedback</h1>
                        <h1>피드백</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            <div>d</div>
                            <div>d</div>
                            <div>d</div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMainPage;
