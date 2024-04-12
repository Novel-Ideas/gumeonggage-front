/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import { getMenuRequest } from "../../../apis/api/menuList";
import { useQuery } from "react-query"; 
import MenuButton from "../../../components/menuButton/MenuButton";

function AdminMenuSearch() {
    const [ menuList, setMenuList ] = useState([]);

    const menuQuery = useQuery(["menuQuery"], getMenuRequest, 
    {
        retry: 0, 
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log(response.data);
            setMenuList(response.data)
        },
        onError: error => {
            console.log(error);
        }
    });

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 조회</div>
                </div>
                <div css={s.searchMenuList}>
                    {menuList.map(menu => (
                        <MenuButton 
                        key={menu.menuId}
                        menuName={menu.menuName}
                        price={menu.menuPrice}
                        cal={menu.menuCal}
                        img={menu.menuImgUrl}
                        />
                    ))}
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMenuSearch;