/**@jsxImportSource @emotion/react */
import * as s from "./style";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";

function PlayRecPage() {
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textBox}>
                    <h1 css={s.highlightText}>
                        후식 <span css={s.recText}>추천 받기</span>
                    </h1>
                </div>
                <div css={s.buttonBox}>
                    <div css={s.buttonLayout}>
                        <button css={s.rejectButton}>안 받을래요</button>
                    </div>
                    <div css={s.buttonLayout}>
                        <button css={s.acceptButton}>받을래요</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default PlayRecPage;
