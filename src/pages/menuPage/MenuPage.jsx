/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import MenuCategoryPage from "../../components/menuComponents/menuCategory/MenuCategory";
import OrderListComponent from "../../components/menuComponents/orderListComponent/OrderListComponent";
import MenuList from "../../components/menuComponents/menuList/MenuList";
import PaymentMethod from "../payPages/paymentMethodPage/PaymentMethod";
import { Routes, Route, useNavigate } from "react-router-dom";

function MenuPage(props) {
    const navigate = useNavigate();
    const handleOrderButtonClick = () => {
        navigate("/menu/menuall/order");
    };

    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.categoryLayout}>
                        <div css={s.categoryBox}>
                            <MenuCategoryPage />
                        </div>
                        <button css={s.bigButton}>큰 글씨 모드</button>
                    </div>
                    <div css={s.menuLayout}>
                        <MenuList />
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
                            주문하기<p>12,900원</p>
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
