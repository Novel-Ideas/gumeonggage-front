/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useMutation } from "react-query";
import { orderRequest } from "../../../apis/api/menuApi";
import { orderMenuListState } from "../../../atoms/orderMenuListAtom";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";

function PointAccumulation() {
    const Swal = require("sweetalert2");
    const navigate = useNavigate();
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);

    const orderRequestMutation = useMutation({
        mutationKey: "orderRequestMutation",
        mutationFn: orderRequest,
        onSuccess: (response) => {
            console.log(response);
            // Swal.fire({
            //     title: "주문완료~!",
            //     text: "음식이 나올때까지 조금만 기다려주세요!",
            //     icon: "success",
            //     confirmButtonColor: "rgb(252, 10, 86)",
            //     confirmButtonText: "확인",
            // }).then((result) => {
            //     if (result.isConfirmed) {
            //         window.location.replace("/menu/feedbackChoice");
            //     }
            // });
            window.location.replace("/menu/feedbackChoice");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleOkClick = () => {
        navigate("/menu/menuall/order/pointinput");
    };
    const handleNoClick = () => {
        let orderInfo = [];
        orderMenuList.map((order) =>
            orderInfo.push({ menuId: order.menuId, menuCount: order.menuCount })
        );
        Swal.fire({
            title: "주문하시겠습니까?",
            text: "적립하지 않은 포인트는 되돌릴 수 없습니다.",
            icon: "warning",

            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
            cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
            confirmButtonText: "주문하기", // confirm 버튼 텍스트 지정
            cancelButtonText: "취소", // cancel 버튼 텍스트 지정

            reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) {
                // 만약 모달창에서 confirm 버튼을 눌렀다면

                Swal.fire({
                    title: "주문 완료!",
                    text: "음식이 나올때까지 조금만 기다려주세요!",
                    icon: "success",
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    orderRequestMutation.mutate(orderInfo);
                }, 3000);
            }
        });
    };
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox} onClick={handleOkClick}>
                            <h1>적립하기</h1>
                        </div>
                    </div>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox} onClick={handleNoClick}>
                            <h1>사용안함</h1>
                        </div>
                    </div>
                </div>
                <div css={s.buttonBox}></div>
            </div>
        </PageModal>
    );
}

export default PointAccumulation;
