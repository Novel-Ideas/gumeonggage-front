/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useQuery } from "react-query"; 
import { getMenuRequest } from "../../../apis/api/menuList";
import MenuButton from "../../../components/menuButton/MenuButton";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminMenuUpdate from "../adminMenuUpdate/AdminMenuUpdate";

function AdminMenuSearch() {
    const [ menuList, setMenuList ] = useState([]);
    const navigate = useNavigate();

    const menuQuery = useQuery(["menuQuery"], getMenuRequest, 
    {
        retry: 0, 
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log(response.data);
            setMenuList(response.data);
        },
        onError: error => {
            console.log(error);
        }
    });

    const handleMenuClick = (id) => {
        navigate(`/admin/getmenu/menu?menuId=${id}`)
    }

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
                        onClick={() => handleMenuClick(menu.menuId)}
                        menuName={menu.menuName}
                        price={menu.menuPrice}
                        cal={menu.menuCal}
                        img={menu.menuImgUrl}
                        />
                    ))}
                </div>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/menu/*" element={<AdminMenuUpdate />} />
                </Routes>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMenuSearch;