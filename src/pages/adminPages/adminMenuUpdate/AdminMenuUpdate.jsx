/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
    deleteMenuRequest,
    updateMenuRequest,
} from "../../../apis/api/menuList";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import Select from "react-select";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import { FaImages } from "react-icons/fa";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { useMenuRegisterInput } from "../../../hooks/useMenuRegisterInput";
import { getAllCategoryRequest } from "../../../apis/api/options";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";

function AdminMenuUpdate({ menuList }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedOption, setSelectedOption] = useState(null);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [menu, setMenu] = useState();
    const navigate = useNavigate();
    const fileRef = useRef();

    const menuName = useMenuRegisterInput();
    const menuCategoryId = useMenuRegisterInput();
    const menuPrice = useMenuRegisterInput();
    const menuCal = useMenuRegisterInput();
    const menuImgUrl = useMenuRegisterInput();

    useEffect(() => {
        setMenu(
            () =>
                menuList.filter(
                    (menu) =>
                        menu.menuId === parseInt(searchParams.get("menuId"))
                )[0]
        );
    }, [menuList]);

    useEffect(() => {
        menuName.setValue(() => menu?.menuName);
        menuPrice.setValue(() => menu?.menuPrice);
        menuCal.setValue(() => menu?.menuCal);
        menuImgUrl.setValue(() => menu?.menuImgUrl);
    }, [menu]);

    const categoryQuery = useQuery(["categoryQuery"], getAllCategoryRequest, {
        onSuccess: (response) => {
            setCategoryOptions(() =>
                response.data.map((category) => {
                    return {
                        value: category.categoryId,
                        label: category.categoryName,
                    };
                })
            );
        },
        onError: (error) => {
            console.log(error);
        },
        retry: 0,
        refetchOnWindowFocus: false,
    });

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length === 0) {
            e.target.value = "";
            return;
        }
        if (!window.confirm("파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }

        const storageRef = ref(storage, `menu/img/${uuid()}_${files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {},
            () => {
                alert("업로드가 완료되었습니다.");
                getDownloadURL(storageRef).then((url) => {
                    menuImgUrl.setValue(() => url);
                    console.log(url);
                });
            }
        );
    };

    const updateMenuMutation = useMutation({
        mutationKey: "updateMenuMutation",
        mutationFn: updateMenuRequest,
        onSuccess: (response) => {
            console.log(response);
            alert("메뉴 수정이 완료됐습니다");
            window.location.replace("/admin/getmenu");
        },
        onError: (error) => {
            console.log(error);
            alert("수정할 메뉴를 선택해 주세요");
        },
    });

    const deleteMenuMutation = useMutation({
        mutationKey: "deleteMenuMutation",
        mutationFn: deleteMenuRequest,
        onSuccess: (response) => {
            console.log(response);
            alert("메뉴 삭제가 완료됐습니다");
            window.location.replace("/admin/getmenu");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleUpdateClick = () => {
        updateMenuMutation.mutate({
            menuId: searchParams.get("menuId"),
            menuName: menuName.value,
            categoryId: menuCategoryId.value.value,
            menuPrice: menuPrice.value,
            menuCal: menuCal.value,
            menuImgUrl: menuImgUrl.value,
        });
    };

    const handleDeleteClick = () => {
        if (window.confirm("메뉴를 삭제하시겠습니까?")) {
            deleteMenuMutation.mutate(parseInt(searchParams.get("menuId")));
        } else {
            return;
        }
    };

    const handleCancelClick = () => {
        navigate("/admin/getmenu");
    };

    const handleResetClick = () => {
        menuName.setValue(() => menu?.menuName);
        menuPrice.setValue(() => menu?.menuPrice);
        menuCal.setValue(() => menu?.menuCal);
        menuImgUrl.setValue(() => menu?.menuImgUrl);
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 관리</div>
                </div>
                <div css={s.main}>
                    <div css={s.resetLayout}>
                        <button onClick={handleResetClick}>
                            <GrPowerReset />
                        </button>
                    </div>
                    <div css={s.addLayout}>
                        <div css={s.addBox}>
                            <div css={s.imgLayout}>
                                <div css={s.imgBox}>
                                    <img src={menuImgUrl.value} alt="" />
                                </div>
                            </div>
                            <div css={s.inputLayout}>
                                <div css={s.inputBox}>
                                    <div css={s.input}>
                                        <input
                                            type="text"
                                            value={menuName.value}
                                            onChange={menuName.handleOnChange}
                                            placeholder="메뉴 이름"
                                        />
                                    </div>
                                    <div css={s.input}>
                                        <Select
                                            defaultValue={selectedOption}
                                            options={categoryOptions}
                                            value={menuCategoryId.value}
                                            onChange={
                                                menuCategoryId.handleOnChange
                                            }
                                            placeholder="카테고리"
                                            styles={{
                                                control: (
                                                    baseStyles,
                                                    state
                                                ) => ({
                                                    ...baseStyles,
                                                    height: "70.2px",
                                                    border: state.isFocused
                                                        ? "none"
                                                        : "none",
                                                    borderBottom:
                                                        "2px solid #222",
                                                    backgroundColor:
                                                        "transparent",
                                                    fontSize: "25px",
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div css={s.input}>
                                        <input
                                            type="text"
                                            placeholder="가격"
                                            value={menuPrice.value}
                                            onChange={menuPrice.handleOnChange}
                                        />
                                    </div>
                                    <div css={s.input}>
                                        <input
                                            type="text"
                                            placeholder="칼로리"
                                            value={menuCal.value}
                                            onChange={menuCal.handleOnChange}
                                        />
                                    </div>
                                    <div css={s.input}>
                                        <span>
                                            <input
                                                type="text"
                                                value={menu?.menuImgUrl}
                                                onChange={
                                                    menuImgUrl.handleOnChange
                                                }
                                            />
                                        </span>
                                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                            onChange={handleFileChange}
                                            placeholder="이미지 url"
                                            ref={fileRef}
                                        />
                                        <button
                                            css={s.inputButton}
                                            onClick={() =>
                                                fileRef.current.click()
                                            }
                                        >
                                            <FaImages />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.footer}>
                    <div css={s.buttonLayout}>
                        <div>
                            <button
                                css={s.saveButton}
                                onClick={handleCancelClick}
                            >
                                취소
                            </button>
                        </div>
                        <div>
                            <button
                                css={s.saveButton}
                                onClick={() => handleDeleteClick()}
                            >
                                삭제하기
                            </button>
                            <button
                                css={s.saveButton}
                                onClick={() => handleUpdateClick()}
                            >
                                수정하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default AdminMenuUpdate;
