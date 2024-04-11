/**@jsxImportSource @emotion/react */
import * as s from "./style";

function MenuButton({ img, menuName, price, cal}) {
    return (
        <div css={s.menuLayout}>
            <button css={s.menu}>
                <div css={s.imglayout}>
                    {img}
                </div>
                <div css={s.menuListLayout}>
                    <h1 css={s.menuFont}>{menuName}</h1>
                    <div>
                        <h1 css={s.calFont}>{cal}{""}kcal</h1>
                    </div>
                    <div css={s.priceFontLayout}>
                        <h1 css={s.priceFont}>{price}원</h1>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default MenuButton;