/**@jsxImportSource @emotion/react */
import * as s from "./style";
import MenuButton from "../menuButton/MenuButton";
import { useEffect, useState } from "react";
import axios from 'axios';

function MenuList() {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('/menus')
            .then(response => {
                setMenuItems(response.data);
            })
            .catch(error => {
                console.error('메뉴 항목을 불러오는 중 오류가 발생했습니다:', error);
            });
    }, []);
    
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.menuFont}>Choose</h1>
                <h1 css={s.categoryFont}>Order</h1>
            </div>
            <div css={s.menuListLayout}>
            {menuItems.map((menuItem, menuId) => (
                    <MenuButton
                        key={menuId} 
                        img={menuItem.menuImgUrl} 
                        menuName={menuItem.menuName} 
                        price={menuItem.menuPrice} 
                    />
                ))}
            </div>
        </div>
    );
}

export default MenuList;