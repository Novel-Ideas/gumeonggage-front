/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useMutation } from "react-query";
import { orderRequest } from "../../../apis/api/menuApi";
import { orderMenuListState } from "../../../atoms/orderMenuListAtom";
import { useRecoilState } from "recoil";

function PointAccumulation() {
    const navigate = useNavigate();
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);

    const orderRequestMutation = useMutation({
        mutationKey: "orderRequestMutation",
        mutationFn: orderRequest,
        onSuccess: (response) => {
            console.log(response);
            alert("메뉴 주문이 완료됐습니다");
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
        orderRequestMutation.mutate(orderInfo);
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
