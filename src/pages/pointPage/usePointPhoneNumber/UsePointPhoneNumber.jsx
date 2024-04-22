/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { totalPayPriceState } from "../../../atoms/totalPayPriceAtom";
import { orderMenuListState } from "../../../atoms/orderMenuListAtom";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useMutation } from "react-query";
import {
    pointCheckRequest,
    savePointRequest,
} from "../../../apis/api/pointApi";
import Swal from "sweetalert2";
import { orderRequest } from "../../../apis/api/menuApi";

function UsePointPhoneNumber(props) {
    const [inputValue, setInputValue] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState();
    const [buttonMode, setButtonMode] = useState(0);
    const [currentPoint, setCurrentPoint] = useState();
    const [usePoint, setUsePoint] = useState();
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const [totalPayPrice, setTotalPayPrice] =
        useRecoilState(totalPayPriceState);
    const navigate = useNavigate();

    const pointCheckMutation = useMutation({
        mutationKey: "pointCheckMutation",
        mutationFn: pointCheckRequest,
        onSuccess: (response) => {
            if (inputValue.length > 0 && response.data === 0) {
                Swal.fire({
                    title: "회원을 찾을 수 없어요!",
                    icon: "question",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
            }
            setCurrentPoint(response.data);
            setButtonMode(() => 1);
        },
        onError: (error) => {
            console.log(error);
        },
    });

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

    const usePointMutation = useMutation({
        mutationKey: "usePointMutation",
        mutationFn: savePointRequest,
        onSuccess: (response) => {
            console.log(response.data);
            if (response.data === 1) {
                Swal.fire({
                    title: "포인트 사용 완료!",
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
        onError: (error) => {
            console.log(error);
        },
    });

    const handleCancelClick = () => {
        navigate("/menu/menuall/order");
    };

    const handleNumClick = (num) => {
        setInputValue(() => [...inputValue, num]);
    };

    const handleDeleteClick = () => {
        setInputValue(() => inputValue.slice(0, -1));
    };

    const handleCheckClick = () => {
        if (buttonMode === 0) {
            if (inputValue.length === 0) {
                Swal.fire({
                    title: "전화번호를 입력해주세요!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                return;
            }
            pointCheckMutation.mutate(inputValue.join(""));
            setPhoneNumber(() => inputValue.join(""));
            setInputValue(() => []);
        } else if (buttonMode === 1) {
            setTotalPayPrice(() => totalPayPrice - inputValue.join(""));
            setUsePoint(() => inputValue.join(""));
        }
    };

    const handleUsePointClick = () => {
        usePointMutation.mutate({
            phoneNumber: phoneNumber,
            point: -usePoint,
        });
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.main}>
                    <div css={s.phoneNumberLayout}>
                        <div css={s.phoneNumberInput}>
                            {inputValue.join("")}
                        </div>
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
                    <div css={s.pointSubmitButtonBox}>
                        <button onClick={handleCheckClick}>
                            <FaCircleChevronRight />
                        </button>
                        Click!
                    </div>
                    <div css={s.usePoint}>
                        <h1>현재 포인트 : {currentPoint}</h1>
                        <h1>사용할 포인트 : {usePoint}</h1>
                        <h1>
                            남은 포인트 :{" "}
                            {currentPoint - usePoint > 0
                                ? currentPoint - usePoint
                                : ""}
                        </h1>
                        <h1>총 결제 금액 : {totalPayPrice}원</h1>
                    </div>
                </div>
                <div css={s.buttonLayout}>
                    <div css={s.buttonBox}>
                        <button onClick={handleCancelClick}>취소하기</button>
                        <button onClick={handleUsePointClick}>사용하기</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default UsePointPhoneNumber;
