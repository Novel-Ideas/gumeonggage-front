/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function DutchPayPage() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const handleCancelClick = () => {
        navigate("/menu/menuall/order");
    };

    const handleCountUp = () => {
        setCount(count + 1);
    };

    const handleCountDown = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.header}>
                    <h1>더치페이 결제</h1>
                </div>
                <div css={s.main}>
                    <div css={s.mainBox}>
                        <div css={s.pricePerPerson}>
                            <div css={s.selectQuantity}>
                                <button onClick={handleCountUp}>
                                    <BiSolidUpArrow />
                                </button>
                                <div>{count}</div>
                                <button onClick={handleCountDown}>
                                    <BiSolidDownArrow />
                                </button>
                            </div>
                            <h1>1인당 15200원</h1>
                        </div>
                        {/* <div css={s.orderHistory}>
                            <h1>주문 내역</h1>
                            <ul>
                                <li>치즈버거 x 2 = 15200</li>
                                <li>총 가격 원</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button css={s.button} onClick={handleCancelClick}>
                        취소
                    </button>
                    <button css={s.button}>결제하기</button>
                </div>
            </div>
        </PageModal>
    );
}

export default DutchPayPage;
