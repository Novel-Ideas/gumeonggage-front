/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import { useRecoilState } from "recoil";
import { orderMenuListState } from "../../../atoms/orderMenuListAtom";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiDelete } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { payListState } from "../../../atoms/payListAtom";
import { useEffect, useState } from "react";

function DutchPayPage() {
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const [orderList, setOrderList] = useState([]);
    const [payList, setPayList] = useRecoilState(payListState);
    const navigate = useNavigate();

    const handleAddPayList = (id) => {
        const findOrder = orderList.filter((order) => order.menuId === id)[0];
        setOrderList((prevOrderList) =>
            prevOrderList.filter((order) => order !== findOrder)
        );
        setPayList(() => [...payList, findOrder]);
    };

    const handleRemoveClick = (id) => {
        const findOrder = payList.filter((order) => order.menuId === id)[0];
        setPayList((prevPayList) =>
            prevPayList.filter((order) => order !== findOrder)
        );
        setOrderList(() => [...orderList, findOrder]);
    };

    const handleCancelClick = () => {
        setPayList(() => []);
        navigate("/menu/menuall/order");
    };

    useEffect(() => {
        setOrderList(() => orderMenuList);
    }, []);

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.header}>
                    <h1>더치페이</h1>
                </div>
                <div css={s.main}>
                    <div css={s.orderListBox}>
                        {orderList.map((order) => {
                            return (
                                <div css={s.orderBox} key={order.menuId}>
                                    <div css={s.orderInfo}>
                                        <div css={s.infoBox}>
                                            <div>{order.menuName}</div>
                                            <div>
                                                <div>{order.menuCount}개</div>
                                                <div>{order.totalPrice}원</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.buttonBox}>
                                        <button
                                            onClick={() =>
                                                handleAddPayList(order.menuId)
                                            }
                                        >
                                            <IoAddCircleOutline />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div css={s.payListBox}>
                        <div css={s.payList}>
                            {payList.map((order) => {
                                return (
                                    <div css={s.orderBox} key={order.menuId}>
                                        <div css={s.orderInfo}>
                                            <div css={s.infoBox}>
                                                <div>{order.menuName}</div>
                                                <div>
                                                    <div>
                                                        {order.menuCount}개
                                                    </div>
                                                    <div>
                                                        {order.totalPrice}원
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div css={s.buttonBox}>
                                            <button
                                                onClick={() =>
                                                    handleRemoveClick(
                                                        order.menuId
                                                    )
                                                }
                                            >
                                                <FiDelete />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div css={s.payButtonBox}>
                            <button onClick={handleCancelClick}>
                                취소하기
                            </button>
                            <button>결제하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default DutchPayPage;
