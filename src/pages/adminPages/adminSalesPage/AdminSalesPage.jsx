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
    getSalesRequest,
    searchSaleByMenuRequest,
} from "../../../apis/api/salesApi";
import { useState } from "react";
import { getMenuRequest } from "../../../apis/api/menuApi";
import MenuButton from "../../../components/menuButton/MenuButton";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminSaleByMenu from "../../../components/adminSaleByMenu/AdminSaleByMenu";
import SwitchExample from "../../../components/toggleSwitch/ToggleSwitch";
import ToggleSwitch from "../../../components/toggleSwitch/ToggleSwitch";

function AdminSalesPage() {
    const [sales, setSales] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const navigate = useNavigate();

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

    const handleMenuClick = (id) => {
        navigate(`/admin/sale/menu?menuId=${id}`);
    };

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>매출 조회</div>
                </div>
                <div css={s.salesCharts}>
                    <ToggleSwitch />
                    <div css={s.chartBox}>
                        <ResponsiveContainer width="100%" height="90%">
                            <ComposedChart data={sales}>
                                <XAxis dataKey="month" />
                                <YAxis
                                    width={100}
                                    tickCount={7}
                                    type="number"
                                    domain={[0, "auto"]}
                                    allowDataOverflow
                                />
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
                            onClick={() => handleMenuClick(menu.menuId)}
                            menuName={menu.menuName}
                            price={menu.menuPrice}
                            cal={menu.menuCal}
                            img={menu.menuImgUrl}
                        />
                    ))}
                </div>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/menu/*" element={<AdminSaleByMenu />} />
                </Routes>
            </div>
        </AdminPageLayout>
    );
}

export default AdminSalesPage;
