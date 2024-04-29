/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import AdminMainPageTop3 from "../../../components/adminMainPageTop3/AdminMainPageTop3";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import { useState } from "react";
import { useQuery } from "react-query";
import { getMenuRequest } from "../../../apis/api/menuApi";
import { getSalesRequest } from "../../../apis/api/salesApi";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import AdminMainPageFeedback from "../../../components/adminMainPageFeedback/AdminMainPageFeedback";
import AdminSalesChart from "../../../components/adminSalesChart/AdminSalesChart";

function AdminMainPage() {
    useAuthCheck();
    const [ranking, setRanking] = useState([]);
    const [sales, setSales] = useState([]);
    const navigate = useNavigate();
    const salesQuery = useQuery(["salesQuery"], getSalesRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response.data);
            setSales(() => response.data);
        },
        onError: (error) => {
            console.log("salesQuery", error);
        },
    });

    const rankingQuery = useQuery(["rankingQuery"], () => getMenuRequest(2), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response.data);
            setRanking(() => response.data);
        },
        onError: (error) => {
            console.log("rankingQuery", error);
        },
    });

    const handlebackButtonClick = () => {
        navigate("/selectmenu");
    };

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.buttonLayout}>
                    <button css={s.backButton} onClick={handlebackButtonClick}>
                        <TbArrowBigLeftFilled />
                    </button>
                </div>
                <div css={s.boxLayout}>
                    <div css={s.fontLayout}>
                        <h1>Sales</h1>
                        <h1>매출</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            <AdminSalesChart
                                sales={sales}
                                month={"month"}
                                keyName={"총 매출"}
                                dataKey={"totalSales"}
                                barColor={"#8abdf3"}
                                lineColor={"#ff7300"}
                            />
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
                            {ranking.map((menu, index) => (
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
                            <AdminMainPageFeedback />
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMainPage;
