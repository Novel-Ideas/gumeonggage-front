/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCrown } from "react-icons/fa";
import MenuButton from "../menuButton/MenuButton";
import { useQueryClient } from "react-query";

function MenuList() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueriesData("principalQuery")

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.chooseFont}>Choose</h1>
                <h1 css={s.orderFont}>Order</h1>
            </div>
            <div css={s.menuListLayout}>
                <MenuButton img={<FaCrown />} menuName= {principalData?.data.menuName} pirce={principalData?.data.menuPrice} />
            </div>
        </div>
    );
}

export default MenuList;