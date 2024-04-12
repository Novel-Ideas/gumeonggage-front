/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import AdminMainPageTop3 from "../../../components/adminMainPageTop3/AdminMainPageTop3";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
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
import { getSalesRequest } from "../../../apis/api/salesApi";

function AdminMainPage() {
    const [lanking, setLanking] = useState([]);
    const [sales, setSales] = useState([]);
    const salesQuery = useQuery(["salesQuery"], getSalesRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("salesQuery", response.data);
            setSales(() => response.data);
        },
        onError: (error) => {
            console.log("salesQuer", error);
        },
    });

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
                                    data={sales}
                                >
                                    <XAxis dataKey="month" />
                                    <YAxis name="aocnf" />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <Bar
                                        dataKey="totalSales"
                                        barSize={20}
                                        name="매출"
                                        fill="#8abdf3"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="totalSales"
                                        stroke="#ff7300"
                                        legendType="none"
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
