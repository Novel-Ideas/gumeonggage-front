/**@jsxImportSource @emotion/react */
import CategoryButton from "../../categoryButton/CategoryButton";
import { PiHamburger } from "react-icons/pi";
import { LuGlassWater } from "react-icons/lu";
import { FaCrown } from "react-icons/fa";
import * as s from "./style";

function MenuCategory() {
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.menuFont}>Menu</h1>
                <h1 css={s.categoryFont}>Category</h1>
            </div>
            <div css={s.categoryLayout}>
                <CategoryButton icon={<FaCrown />} categoryName={"TOP3"} />
                <CategoryButton
                    icon={<PiHamburger />}
                    categoryName={"Burger"}
                />
                <CategoryButton
                    icon={<LuGlassWater />}
                    categoryName={"Drink"}
                />
            </div>
        </div>
    );
}

export default MenuCategory;
