/**@jsxImportSource @emotion/react */
import * as s from "./style";
import MenuButton from "../menuButton/MenuButton";
import { useEffect, useState } from "react";

async function fetchMenuData() {
    try {
        const response = await fetch('/menus'); // 백엔드 API 엔드포인트
        if (!response.ok) {
            throw new Error('Failed to fetch menu data');
        }
        return await response.json(); // JSON 형식의 데이터 반환
    } catch (error) {
        console.error('Error fetching menu data:', error);
        return []; // 에러가 발생하면 빈 배열 반환 또는 다른 적절한 처리
    }
}

function MenuList() {
    
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetchMenuData().then(data => setMenuData(data));
    }, []);


    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.menuFont}>Choose</h1>
                <h1 css={s.categoryFont}>Order</h1>
            </div>
            <div css={s.menuListLayout}>
                {menuData.map(menuItem => (
                    <MenuButton
                        key={menuItem.menuId}
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