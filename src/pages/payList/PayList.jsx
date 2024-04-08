/** @jsxImportSource @emotion/react */
import  PageLayout  from "../../components/pageComponents/PageLayout"
import * as s from "./style";

function PayList() {
    return (
        <PageLayout>
           <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>카드결제</h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox}></div>
                        <h1>네이버페이</h1>
                    </div>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox}></div>
                        <h1>카카오페이</h1>
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button css={s.cancle}><span css ={s.buttonX}>x</span> 취소</button>
                </div>
            </div> 
        </PageLayout>
        
    );
}

export default PayList;