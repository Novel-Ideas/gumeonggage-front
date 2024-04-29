/**@jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import { useQuery } from "react-query";
import { getSalesRequest } from "../../../apis/api/salesApi";
import { useState } from "react";
import { getMenuRequest } from "../../../apis/api/menuApi";
import MenuButton from "../../../components/menuButton/MenuButton";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminSaleByMenu from "../../../components/adminSaleByMenu/AdminSaleByMenu";
import ToggleSwitch from "../../../components/toggleSwitch/ToggleSwitch";
import { useRecoilState } from "recoil";
import { salesModeState } from "../../../atoms/salesModeAtom";
import AdminSalesChart from "../../../components/adminSalesChart/AdminSalesChart";

function AdminSalesPage() {
    const [sales, setSales] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [salesMode, setSalesMode] = useRecoilState(salesModeState);
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
                    <div css={s.toggleSwitch}>
                        <div>총 매출</div>
                        <ToggleSwitch />
                        <div>총 주문수</div>
                    </div>
                    <div css={s.chartBox}>
                        {salesMode ? (
                            <AdminSalesChart
                                sales={sales}
                                month={"month"}
                                keyName={"총 매출"}
                                dataKey={"totalSales"}
                                barColor={"#8abdf3"}
                                lineColor={"#ff7300"}
                            />
                        ) : (
                            <AdminSalesChart
                                sales={sales}
                                month={"month"}
                                keyName={"총 주문 수"}
                                dataKey={"orderCount"}
                                barColor={"#ff7300"}
                                lineColor={"#8abdf3"}
                            />
                        )}
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
