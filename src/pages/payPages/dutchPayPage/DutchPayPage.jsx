/**@jsxImportSource @emotion/react */
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";

function DutchPayPage() {
    return (
        <PageModal>
            <div css={s.layout}>
                <h1>더치페이 결제</h1>
                <div css={s.result}>
                    <div css={s.selectQuantity}></div>
                    <div css={s.pricePerPerson}>
                        <h1>1인당 15200원</h1>
                    </div>
                    <div css={s.orderHistory}>
                        <h1>주문 내역</h1>
                        <ul>
                            <li>치즈버거 x 2 = 15200</li>
                            <li>총 가격 원</li>
                        </ul>
                    </div>
                </div>
                <div css={s.payButton}>
                    <button>결제하기</button>
                </div>
                <div css={s.cancelButton}>
                    <button>취소</button>
                </div>
            </div>
        </PageModal>
    );
}

export default DutchPayPage;
