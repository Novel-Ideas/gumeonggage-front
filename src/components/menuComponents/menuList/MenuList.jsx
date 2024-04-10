/**@jsxImportSource @emotion/react */
import * as s from "./style";
import MenuButton from "../../menuButton/MenuButton";
import { useMutation } from "react-query";
import {
    getBurgerRequest,
    getDrinkRequest,
    getTop3Request,
    getmenuRequest,
} from "../../../apis/api/menuList";
import { useEffect, useState } from "react";
import { categoryState } from "../../../atoms/categoryAtom";
import { useRecoilState } from "recoil";

function MenuList() {
    const [menuList, setMenuList] = useState([]);
    const [category, setCategory] = useRecoilState(categoryState);

    const getMenuMutation = useMutation({
        mutationKey: "getMenuMutation",
        mutationFn: getmenuRequest,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                console.log(response.data);
                setMenuList(response.data);
            }
        },
    });

    const getTop3Mutation = useMutation({
        mutationkey: "getTop3Mutation",
        mutationFn: getTop3Request,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                console.log(response.data);
                setMenuList(response.data);
            }
        },
    });

    const getBurgerMutation = useMutation({
        mutationkey: "getBurgerMutation",
        mutationFn: getBurgerRequest,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                console.log(response.data);
                setMenuList(response.data);
            }
        },
    });

    const getDrinkMutation = useMutation({
        mutationkey: "getDrinkMutation",
        mutationFn: getDrinkRequest,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                console.log(response.data);
                setMenuList(response.data);
            }
        },
    });

    useEffect(() => {
        if (category === "all") {
            getMenuMutation.mutate();
            console.log(category);
        } else if (category === "top3") {
            getTop3Mutation.mutate();
            console.log(category);
        } else if (category === "burger") {
            getBurgerMutation.mutate();
            console.log(category);
        } else if (category === "drink") {
            getDrinkMutation.mutate();
            console.log(category);
        }
    }, [category]);

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1 css={s.chooseFont}>Choose</h1>
                <h1 css={s.orderFont}>Order</h1>
            </div>
            <div css={s.menuListLayout}>
                <div css={s.menuListBox}>
                    {category === "top3" ? (
                        menuList.map((menu) => (
                            <MenuButton
                                key={menu.menuId}
                                img={menu.menu?.menuImgUrl}
                                menuName={menu?.menu?.menuName}
                                price={menu?.menu?.menuPrice}
                            />
                        ))
                    ) : (
                        <>
                            {menuList.map((menu) => (
                                <MenuButton
                                    key={menu.menuId}
                                    img={menu.menuImgUrl}
                                    menuName={menu.menuName}
                                    price={menu.menuPrice}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuList;
