/**@jsxImportSource @emotion/react */
import PlayList from "../../../components/playComponent/playList/PlayList";
import PlayMap from "../../../components/playComponent/playMap/PlayMap";
import * as s from "./style";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";

function PlayListPage() {
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.container}>
                    <PlayList />
                    <PlayMap />
                </div>
                <div css={s.buttonBox}>
                    <button css={s.cancel}>확인</button>
                </div>
            </div>
        </PageModal>
    );
}

export default PlayListPage;
