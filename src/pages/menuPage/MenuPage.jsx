/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import MenuCategoryPage from "../../components/menuComponents/menuCategory/MenuCategory";
import OrderListComponent from "../../components/menuComponents/orderListComponent/OrderListComponent";
import MenuList from "../../components/menuComponents/menuList/MenuList";
import PaymentMethod from "../payPages/paymentMethodPage/PaymentMethod";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { orderMenuListState } from "../../atoms/orderMenuListAtom";
import { useEffect, useState } from "react";
import BigMenuComponent from "../../components/bigComponents/bigMenuComponent/BigMenuComponent";
import BigMenuListComponent from "../../components/bigComponents/bigMenuListComponent/BigMenuListComponent";

function MenuPage(props) {
    const [result, setResult] = useState();
    const [bigMode, setBigMode] = useState(false);
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const navigate = useNavigate();
    const handleOrderButtonClick = () => {
        navigate("/menu/menuall/order");
    };

    const handleBigModeClick = () => {
        setBigMode(() => !bigMode);
    };

    useEffect(() => {
        const order = orderMenuList;
        setResult(() => {
            let price = 0;
            order.map((menu) => (price += menu.totalPrice));
            return price;
        });
        console.log(result);
    }, [orderMenuList]);

    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.categoryLayout}>
                        <div css={s.categoryBox}>
                            {bigMode ? (
                                <BigMenuComponent />
                            ) : (
                                <MenuCategoryPage />
                            )}
                            {/* <MenuCategoryPage /> */}
                            {/* <BigMenuComponent /> */}
                        </div>
                        <button css={s.bigButton} onClick={handleBigModeClick}>
                            큰 글씨 모드
                        </button>
                    </div>
                    <div css={s.menuLayout}>
                        {bigMode ? (
                                    <BigMenuListComponent />
                                ) : (
                                    <MenuList />
                                )}
                    </div>
                </div>
                <div css={s.orderLayout}>
                    <div css={s.header}>
                        <h1>Order</h1>
                        <h1>Menu</h1>
                    </div>
                    <div css={s.orderMenuLayout}>
                        <OrderListComponent />
                    </div>
                    <div css={s.orderButtonLayout}>
                        <button
                            css={s.orderButton}
                            onClick={handleOrderButtonClick}
                        >
                            주문하기<p>{result}원</p>
                        </button>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/order/*" element={<PaymentMethod />} />
                </Routes>
            </div>
        </PageLayout>
    );
}

export default MenuPage;
