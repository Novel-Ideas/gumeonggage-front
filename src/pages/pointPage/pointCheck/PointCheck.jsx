/** @jsxImportSource @emotion/react */
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";

function PointCheck(props) {
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textBox}>
                    <h1 css={s.text}>회원정보 없음</h1>
                </div>
                <div css={s.signupAndAccumulBox}>
                    <div css={s.buttonLayout}>
                        <button css={s.rejectButton}>안 할래요</button>
                    </div>
                    <div css={s.buttonLayout}>
                        <button css={s.signupAndAccumul}>가입하고 적립할래요</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default PointCheck;