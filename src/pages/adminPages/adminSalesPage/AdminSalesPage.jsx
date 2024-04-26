/**@jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
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
import { useQuery } from "react-query";
import {
    getPaymentsRequest,
    getSalesRequest,
} from "../../../apis/api/salesApi";
import { useState } from "react";
import { getMenuRequest } from "../../../apis/api/menuApi";
import MenuButton from "../../../components/menuButton/MenuButton";

function AdminSalesPage() {
    const [sales, setSales] = useState([]);
    const [menuList, setMenuList] = useState([]);

    const salesQuery = useQuery(["salesQuery"], getSalesRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setSales(() => response.data);
        },
        onError: (error) => {
            console.log("salesQuery", error);
        },
    });

    const menuQuery = useQuery(["menuQuery"], () => getMenuRequest(1), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setMenuList(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>매출 조회</div>
                </div>
                <div css={s.salesCharts}>
                    <div css={s.chartBox}>
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
                                    name="총 매출"
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
                <div css={s.line}></div>
                <div css={s.menuList}>
                    {menuList.map((menu, index) => (
                        <MenuButton
                            key={menu.menuId}
                            // onClick={() => handleMenuClick(menu.menuId)}
                            menuName={menu.menuName}
                            price={menu.menuPrice}
                            cal={menu.menuCal}
                            img={menu.menuImgUrl}
                        />
                    ))}
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminSalesPage;
