/**@jsxImportSource @emotion/react */
import PlayList from "../../../components/playComponent/playList/PlayList";
import PlayMap from "../../../components/playComponent/playMap/PlayMap";
import * as s from "./style";

function PlayListPage() {
    return (
        <>
            <div css={s.layout}>
                <PlayList />
                <PlayMap />
                <div css={s.button}>
                    <button>확인</button>
                </div>
            </div>
        </>
    );
}

export default PlayListPage;