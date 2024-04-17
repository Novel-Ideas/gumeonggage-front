/** @jsxImportSource @emotion/react */
import * as s from "./style";
import DutchPayPage from "../dutchPayPage/DutchPayPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import { useRecoilState } from "recoil";
import { orderMenuListState } from "../../../atoms/orderMenuListAtom";

function PaymentMethod() {
    const navigate = useNavigate();
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const handleCancelClick = () => {
        navigate("/menu/menuall");
    };
    const handleDutchPayClick = () => {
        navigate("/menu/menuall/order/dutchpay");
    };

    
    console.log(orderMenuList)
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>
                        결제방법<span css={s.blackText}>을 선택하세요</span>
                    </h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <button css={s.methodBox}>카드결제</button>
                    </div>
                    <div css={s.methodLayout}>
                        <button css={s.methodBox} onClick={handleDutchPayClick}>
                            더치페이
                        </button>
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button css={s.cancel} onClick={handleCancelClick}>
                        취소
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/dutchpay" element={<DutchPayPage />} />
                </Routes>
            </div>
        </PageModal>
    );
}

export default PaymentMethod;
