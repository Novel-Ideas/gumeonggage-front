/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import MenuCategoryPage from "../../components/menuComponents/menuCategory/MenuCategory";
import OrderListComponent from "../../components/menuComponents/orderListComponent/OrderListComponent";
import MenuList from "../../components/menuList/MenuList";
import PaymentMethod from "../payment Method/PaymentMethod";
import PageModal from "../../components/pageComponents/pageModal/PageModal";
import { useState } from "react";

function MenuPage(props) {
    const [modalShow, setModalShow] = useState(false);
    const handleOrderButtonClick = () => {
        setModalShow(() => true);
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
                {modalShow ? (
                    <PageModal>
                        <PaymentMethod />
                    </PageModal>
                ) : (
                    <></>
                )}
            </div>
        </PageLayout>
    );
}

export default MenuPage;
