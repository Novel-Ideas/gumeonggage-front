/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import PointAccumulation from "../../pointPage/pointAccumulation/PointAccumulation";
import PointPhoneNumber from "../../pointPage/pointPhoneNumber/PointPhoneNumber";
import UsePointPhoneNumber from "../../pointPage/usePointPhoneNumber/UsePointPhoneNumber";

function PaymentMethod() {
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate("/menu/menuall");
    };

    const handleOrderClick = () => {
        navigate("/menu/menuall/order/askpoint");
    };

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
                        <button css={s.methodBox} onClick={handleOrderClick}>
                            카드결제
                        </button>
                    </div>
                    <div css={s.methodLayout}>
                        <button css={s.methodBox2} onClick={handleOrderClick}>
                            <img
                                src="https://blog.kakaocdn.net/dn/cEaPmw/btrcIUODymI/EBvA7nx7wVTcdLIrgiVsJK/img.jpg"
                                alt="카카오페이"
                                css={s.kakaoButton}
                            />
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
                    <Route path="/askpoint" element={<PointAccumulation />} />
                    <Route path="/pointinput" element={<PointPhoneNumber />} />
                    <Route
                        path="/usepointinput"
                        element={<UsePointPhoneNumber />}
                    />
                </Routes>
            </div>
        </PageModal>
    );
}

export default PaymentMethod;
