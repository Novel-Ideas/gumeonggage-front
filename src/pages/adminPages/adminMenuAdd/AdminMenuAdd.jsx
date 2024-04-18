/** @jsxImportSource @emotion/react */
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import * as s from "./style";
import { GrPowerReset } from "react-icons/gr";
import { FaImages } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";
import noImg from "../../../assets/noImg.webp";
import Select from "react-select";
import { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { v4 as uuid } from "uuid";
import { getAllCategoryRequest } from "../../../apis/api/options";
import { useMenuRegisterInput } from "../../../hooks/useMenuRegisterInput";
import { registerMenuRequest } from "../../../apis/api/menuApi";
import Swal from "sweetalert2";

function AdminMenuAdd() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const fileRef = useRef();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const menuName = useMenuRegisterInput();
    const menuCategoryId = useMenuRegisterInput();
    const menuPrice = useMenuRegisterInput();
    const menuCal = useMenuRegisterInput();
    const menuImgUrl = useMenuRegisterInput();

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
        Swal.fire({
            title: "파일을 업로드 하시겠습니까?",
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: "warning",

            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
            cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
            confirmButtonText: "업로드", // confirm 버튼 텍스트 지정
            cancelButtonText: "취소", // cancel 버튼 텍스트 지정

            reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) {
                // 만약 모달창에서 confirm 버튼을 눌렀다면

                Swal.fire("업로드가 완료되었습니다.", "", "success");
                const storageRef = ref(
                    storage,
                    `menu/img/${uuid()}_${files[0].name}`
                );
                const uploadTask = uploadBytesResumable(storageRef, files[0]);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {},
                    (error) => {},
                    () => {
                        Toast.fire({
                            icon: "success",
                            title: "성공적으로 업로드가 완료되었습니다.",
                        });
                        getDownloadURL(storageRef).then((url) => {
                            menuImgUrl.setValue(() => url);
                            console.log(url);
                        });
                    }
                );
            }
        });
    };

    const registerMenuMutation = useMutation({
        mutationKey: "registerMenuMutation",
        mutationFn: registerMenuRequest,
        onSuccess: (response) => {
            Toast.fire({
                icon: "success",
                title: "성공적으로 등록 완료되었습니다.",
            });
            setTimeout(() => {
                window.location.replace("/admin/add");
            }, 2000);
        },
        onError: (error) => {},
    });

    const handleSubmitClick = () => {
        registerMenuMutation.mutate({
            menuName: menuName.value,
            categoryId: menuCategoryId.value.value,
            menuPrice: menuPrice.value,
            menuCal: menuCal.value,
            menuImgUrl: menuImgUrl.value,
        });
    };

    const handleResetClick = () => {
        menuName.setValue(() => "");
        menuCategoryId.setValue(() => "");
        menuPrice.setValue(() => "");
        menuCal.setValue(() => "");
        menuImgUrl.setValue(() => "");
    };

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 추가</div>
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
                                    <img
                                        src={
                                            !menuImgUrl.value
                                                ? noImg
                                                : menuImgUrl.value
                                        }
                                        alt=""
                                    />
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
                                                value={menuImgUrl.value}
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
                        <button
                            css={s.saveButton}
                            onClick={() => handleSubmitClick()}
                        >
                            저장
                        </button>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMenuAdd;
