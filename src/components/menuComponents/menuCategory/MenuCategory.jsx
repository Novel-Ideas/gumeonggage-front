/**@jsxImportSource @emotion/react */
import CategoryButton from "../../categoryButton/CategoryButton";
import { PiHamburger } from "react-icons/pi";
import { LuGlassWater } from "react-icons/lu";
import { FaCrown } from "react-icons/fa";
import { TiThSmall } from "react-icons/ti";
import * as s from "./style";
import { useRecoilState } from "recoil";
import { categoryState } from "../../../atoms/categoryAtom";

function MenuCategory() {
    const [category, setCategory] = useRecoilState(categoryState);
    const handleAllClick = () => {
        setCategory("all");
    };
    const handleTop3Click = () => {
        setCategory("top3");
    };
    const handleBurgerClick = () => {
        setCategory("burger");
    };
    const handleDrinkClick = () => {
        setCategory("drink");
    };
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.menuFont}>Menu</h1>
                <h1 css={s.categoryFont}>Category</h1>
            </div>
            <div css={s.categoryLayout}>
                <CategoryButton
                    icon={<TiThSmall />}
                    categoryName={"ALL"}
                    onclick={handleAllClick}
                />
                <CategoryButton
                    icon={<FaCrown />}
                    categoryName={"TOP3"}
                    onclick={handleTop3Click}
                />
                <CategoryButton
                    icon={<PiHamburger />}
                    categoryName={"Burger"}
                    onclick={handleBurgerClick}
                />
                <CategoryButton
                    icon={<LuGlassWater />}
                    categoryName={"Drink"}
                    onclick={handleDrinkClick}
                />
            </div>
        </div>
    );
}

export default MenuCategory;
