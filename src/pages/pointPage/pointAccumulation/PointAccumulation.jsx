/** @jsxImportSource @emotion/react */
import  PageLayout  from "../../../components/pageComponents/pageLayout/PageLayout"
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";

function PointAccumulation() {
    return (
        <PageModal>
           <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox}>
                            <h1>적립하기</h1>
                        </div>
                    </div>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox}>
                            <h1>사용안함</h1>
                        </div>
                    </div>
                </div>
                <div css={s.buttonBox}>
                </div>
            </div> 
        </PageModal>
        
    );
}

export default PointAccumulation;