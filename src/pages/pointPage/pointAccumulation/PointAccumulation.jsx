/** @jsxImportSource @emotion/react */
import  PageLayout  from "../../../components/pageComponents/PageLayout"
import * as s from "./style";

function PointAccumulation() {
    return (
        <PageLayout>
           <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox}>
                            <h1>적립 하시겠습니까</h1>
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
        </PageLayout>
        
    );
}

export default PointAccumulation;