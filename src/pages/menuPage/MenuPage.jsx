/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageLayout from "../../components/pageComponents/PageLayout";
import MenuCategoryPage from "../../components/menuCategory/MenuCategory";
import MenuList from "../../components/menuList/MenuList";

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
                        <div>
                            <MenuList />
                        </div>
                    </div>
                </div>
                <div css={s.orderLayout}>
                    <div css={s.orderMenuLayout}>주문 메뉴</div>
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
