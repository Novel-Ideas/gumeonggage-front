/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageModal from "../pageComponents/pageModal/PageModal";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchSalesByMenuRequest } from "../../apis/api/salesApi";
import { useNavigate } from "react-router-dom";

function AdminSaleByMenu() {
    const [ salesByMenu, setSalesByMenu ] = useState([]);
    const navigate = useNavigate();

    const salesByMenuQuery = useQuery(["salesByMenuQuery"], searchSalesByMenuRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log(response.data)
            setSalesByMenu(response.data);
        },
        onError: error => {
            console.log(error);
        }
    });

    const handleonClickCancel = () => {
        navigate("/admin/sale");
    }

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 매출 조회</div>
                </div>
            <div css={s.main}>
                <div css={s.chartLayout}>
                    <div css={s.chartBox}>
                        
                    </div>
                </div>
                <div>
                    <ResponsiveContainer width={650} height="70%">
                        <ComposedChart
                            // width={730}
                            // height={250}
                            data={salesByMenu}
                            >
                            <XAxis dataKey="month" />
                            <YAxis name="매출" />
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
            </div >
            <div css={s.buttonLayout}>
                <button css={s.cancel} onclick={handleonClickCancel}>취소</button>
            </div>
            </div>
        </PageModal>
    );
}

export default AdminSaleByMenu;