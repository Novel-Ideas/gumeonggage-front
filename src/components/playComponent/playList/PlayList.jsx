/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { playDataListState } from "../../../atoms/playDataListAtom";

function PlayList() {
    const [playListData, setPlayListData] = useRecoilState(playDataListState);

    return (
        <div css={s.layout}>
            <div css={s.listContainer}>
                <ul css={s.listLayout}>
                    {playListData.map((data) => (
                        <li css={s.list} key={data.id}>
                            {data.displayName.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PlayList;
