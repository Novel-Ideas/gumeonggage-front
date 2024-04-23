/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { playDataListState } from "../../../atoms/playDataListAtom";
import { useSearchParams } from "react-router-dom";

function PlayList() {
    const [playListData, setPlayListData] = useRecoilState(playDataListState);

    const handleSubmitClick = (id) => {
        console.log(id);

        const playList = playListData.filter((data) => data.id === id)[0]
        console.log(playList)
    };

    return (
        <div css={s.layout}>
            <div css={s.listContainer}>
                <ul css={s.listLayout}>
                    {playListData.map((data) => (
                        <li
                            css={s.list}
                            key={data.id}
                            onClick={() => handleSubmitClick(data.id)}
                        >
                            {data.displayName.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PlayList;
