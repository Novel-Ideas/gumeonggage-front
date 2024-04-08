/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCrown } from "react-icons/fa";
import MenuButton from "../menuButton/MenuButton";

function MenuList() {
    
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.chooseFont}>Choose</h1>
                <h1 css={s.orderFont}>Order</h1>
            </div>
            <div css={s.menuListLayout}>
                <div css={s.menuListBox}>
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                </div>
            </div>
        </div>
    );
}

export default MenuList;