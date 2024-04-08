/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../components/pageComponents/PageLayout";
import MenuCategoryPage from "../../components/menuComponents/menuCategory/MenuCategory";
import OrderListComponent from "../../components/menuComponents/orderListComponent/OrderListComponent";

function MenuPage(props) {
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
                        <div>메뉴</div>
                    </div>
                </div>
                <div css={s.orderLayout}>
                    <div css={s.orderMenuLayout}>
                        <OrderListComponent />
                    </div>
                    <div css={s.orderButtonLayout}>
                        <button css={s.orderButton}>
                            주문하기<p>12,900원</p>
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default MenuPage;
