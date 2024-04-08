/**@jsxImportSource @emotion/react */
import PageLayout from "../../../components/pageComponents/PageLayout";
import * as s from "./style";

function PlayRecPage() {
    return (
        <PageLayout>
            <div css={s.layout}>
                <div>
                    
                </div>
                <div css={s.desertRecommend}>
                    <h1>후식 추천 받기</h1>    
                </div>
                <div css={s.rejectButton}>
                    <button>안 받을래요</button>
                </div>
            </div>
        </PageLayout>
    );
}

export default PlayRecPage;