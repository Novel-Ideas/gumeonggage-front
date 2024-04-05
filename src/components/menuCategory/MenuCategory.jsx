/**@jsxImportSource @emotion/react */
import CategoryButton from "../categoryButton/CategoryButton";
import { PiHamburger } from "react-icons/pi";
import { LuGlassWater } from "react-icons/lu";
import { FaCrown } from "react-icons/fa";
import * as s from "./style";

function MenuCategory() {
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.font}>Menu</h1>
                <h1 css={s.font2}>Category</h1>
            </div>
            <div css={s.categorylayout}>
                <CategoryButton css={s.category} icon={<FaCrown />} categoryName={"TOP3"} />
                <CategoryButton icon={<PiHamburger />} categoryName={"Burger"} />
                <CategoryButton icon={<LuGlassWater />} categoryName={"Drink"} />
            </div>
        </div>
    );
}

export default MenuCategory;