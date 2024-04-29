/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageModal from "../pageComponents/pageModal/PageModal";
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
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { searchSalesByMenuRequest } from "../../apis/api/salesApi";
import { useNavigate, useSearchParams } from "react-router-dom";

function AdminSaleByMenu() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [salesByMenu, setSalesByMenu] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState([]);
    const [menuId, setMenuId] = useState();
    const navigate = useNavigate();

    console.log(searchParams.get("menuId"));
    const salesByMenuQuery = useQuery(
        ["salesByMenuQuery"],
        searchSalesByMenuRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response.data);
                setSalesByMenu(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    useEffect(() => {
        setSelectedMenu(() =>
            salesByMenu.filter((menu) => {
                return (
                    menu?.menuId === parseInt(searchParams.get("menuId")) &&
                    menu.orderYear === "2022"
                );
            })
        );
    }, [salesByMenu]);

    console.log(selectedMenu);
    const handleonClickCancel = () => {
        navigate("/admin/sale");
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 매출 조회</div>
                </div>
                <div css={s.main}>
                    <div css={s.chartLayout}>
                        <div css={s.chartBox}>
                            <div css={s.inputBox}>
                                <div css={s.input}>
                                    {salesByMenu.map((menu) => (
                                        <>
                                            <input
                                                css={s.input}
                                                type="text"
                                                value={menu.menuId}
                                                placeholder="메뉴 아이디"
                                                disabled
                                            />
                                            <input
                                                type="text"
                                                value={menu.orderMonth}
                                                placeholder="주문월"
                                                disabled
                                            />
                                            <input
                                                type="text"
                                                value={menu.orderYear}
                                                placeholder="주문연도"
                                                disabled
                                            />
                                            <input
                                                type="text"
                                                value={menu.sales}
                                                placeholder="총합 가격 "
                                                disabled
                                            />
                                            <input
                                                type="text"
                                                value={menu.totalCount}
                                                placeholder="전체 주문 횟수"
                                                disabled
                                            />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ResponsiveContainer width="90%" height="70%">
                            <ComposedChart data={salesByMenu}>
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
                <div css={s.buttonLayout}>
                    <button css={s.cancel} onClick={handleonClickCancel}>
                        취소
                    </button>
                </div>
            </div>
        </PageModal>
    );
}

export default AdminSaleByMenu;
