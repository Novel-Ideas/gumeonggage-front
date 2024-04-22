/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useState } from "react";
import { useMutation } from "react-query";
import {
    pointCheckRequest,
    savePointRequest,
    userSignupRequest,
} from "../../../apis/api/pointApi";
import { orderMenuListState } from "../../../atoms/orderMenuListAtom";
import { orderRequest } from "../../../apis/api/menuApi";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { totalPayPriceState } from "../../../atoms/totalPayPriceAtom";

function PointPhoneNumber() {
    const [inputValue, setInputValue] = useState([]);
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const [totalPayPrice, setTotalPayPrice] =
        useRecoilState(totalPayPriceState);
    const navigate = useNavigate();

    const orderRequestMutation = useMutation({
        mutationKey: "orderRequestMutation",
        mutationFn: orderRequest,
        onSuccess: (response) => {
            window.location.replace("/menu/feedbackChoice");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const savePointMutation = useMutation({
        mutationKey: "savePointMutation",
        mutationFn: savePointRequest,
        onSuccess: (response) => {
            console.log(response.data);
            if (response.data === 1) {
                Swal.fire({
                    title: "적립 완료!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                setTimeout(() => {
                    let orderInfo = [];
                    orderMenuList.map((order) =>
                        orderInfo.push({
                            menuId: order.menuId,
                            menuCount: order.menuCount,
                        })
                    );
                    Swal.fire({
                        title: "주문 완료!",
                        text: "음식이 나올때까지 조금만 기다려주세요!",
                        icon: "success",
                        showConfirmButton: false,
                    });
                    setTimeout(() => {
                        orderRequestMutation.mutate(orderInfo);
                    }, 3000);
                }, 2000);
            }
        },
    });

    const userSignupMutation = useMutation({
        mutationKey: "userSignupMutation",
        mutationFn: userSignupRequest,
        onSuccess: (response) => {
            if (response.data === true) {
                Swal.fire({
                    title: "회원가입 완료!",
                    text: "바로 적립도 도와드릴게요!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                setTimeout(() => {
                    savePointMutation.mutate({
                        phoneNumber: inputValue.join(""),
                        point: Math.ceil((totalPayPrice * 1) / 100),
                    });
                }, 2000);
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const pointCheckMutation = useMutation({
        mutationKey: "pointCheckMutation",
        mutationFn: pointCheckRequest,
        onSuccess: (response) => {
            if (response.data === 0) {
                Swal.fire({
                    title: "가입되어있지 않아요!",
                    text: "회원을 가입하고 적립을 하시겠습니까?",
                    icon: "error",

                    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                    confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
                    cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
                    confirmButtonText: "가입하기", // confirm 버튼 텍스트 지정
                    cancelButtonText: "취소하기", // cancel 버튼 텍스트 지정

                    reverseButtons: true, // 버튼 순서 거꾸로
                }).then((result) => {
                    if (result.isConfirmed) {
                        userSignupMutation.mutate({
                            phonenumber: inputValue.join(""),
                        });
                    }
                });
            } else {
                console.log(response.data);
                savePointMutation.mutate({
                    phoneNumber: inputValue.join(""),
                    point: Math.ceil((totalPayPrice * 1) / 100),
                });
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleCancelClick = () => {
        navigate("/menu/menuall/order");
    };

    const handleNumClick = (num) => {
        console.log(num);
        setInputValue(() => [...inputValue, num]);
    };

    const handleDeleteClick = () => {
        setInputValue(() => inputValue.slice(0, -1));
    };

    const handleSavePointClick = () => {
        pointCheckMutation.mutate(inputValue.join(""));
    };

    console.log(inputValue);

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.phoneNumberLayout}>
                    <div css={s.phoneNumberInput}>{inputValue.join("")}</div>
                    <table css={s.tableContainer}>
                        <tr>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("1")}
                                >
                                    1
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("2")}
                                >
                                    2
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("3")}
                                >
                                    3
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("4")}
                                >
                                    4
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("5")}
                                >
                                    5
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("6")}
                                >
                                    6
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("7")}
                                >
                                    7
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("8")}
                                >
                                    8
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("9")}
                                >
                                    9
                                </button>
                            </td>
                        </tr>
                        <tr css={s.trBox}>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("010")}
                                >
                                    010
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("0")}
                                >
                                    0
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={handleDeleteClick}
                                >
                                    지움
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div css={s.buttonLayout}>
                    <div css={s.buttonBox}>
                        <button onClick={handleCancelClick}>취소하기</button>
                        <button onClick={handleSavePointClick}>적립하기</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default PointPhoneNumber;
