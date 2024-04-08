/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCrown } from "react-icons/fa";
import MenuButton from "../menuButton/MenuButton";
import { useMutation } from 'react-query'
import { getmenuRequest } from "../../apis/menuList";
import { useEffect, useState } from "react";

function MenuList() {
    const [ menuList, setMenuList ] = useState([]);

    const getMenuMutation = useMutation({
        mutationKey: "getMenuMutation",
        mutationFn: getmenuRequest,
        retry: 0,
        onSuccess: (response) => {
            if(response.data) {
                console.log(response.data)
                setMenuList(response.data)
            }
        }
    })

    useEffect(() => {
        getMenuMutation.mutate();
    }, [])

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.chooseFont}>Choose</h1>
                <h1 css={s.orderFont}>Order</h1>
            </div>
            <div css={s.menuListLayout}>
                <div css={s.menuListBox}>
                    {
                        menuList.map(
                            (menu, index) =>
                            <MenuButton 
                            key={menu.menuId}
                            img={menu.menuImgUrl}
                            menuName={menu.menuName}
                            price={menu.menuPrice}
                            />
                        )
                    }
                    {/* <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} />
                    <MenuButton img={<FaCrown />} menuName= {"트리플 버거"} price={"7900원"} /> */}
                </div>
            </div>
        </div>
    );
}

export default MenuList;