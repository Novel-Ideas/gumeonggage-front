/**@jsxImportSource @emotion/react */
import PlayList from "../../../components/playComponent/playList/PlayList";
import PlayMap from "../../../components/playComponent/playMap/PlayMap";
import * as s from "./style";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import { useRecoilState } from "recoil";
import { playDataListState } from "../../../atoms/playDataListAtom";
import { useMutation, useQuery } from "react-query";
import { playListDataRequest } from "../../../apis/api/playList";

function PlayListPage() {
    const [playListData, setPlayListData] = useRecoilState(playDataListState);

    const playListDataQuery = useQuery(
        ["playListDataQuery"],
        () =>
            playListDataRequest({
                includedTypes: ["tourist_attraction"],
                maxResultCount: 10,
                locationRestriction: {
                    circle: {
                        center: {
                            latitude: 35.15246,
                            longitude: 129.059681,
                        },
                        radius: 500.0,
                    },
                },
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                response.json().then((data) => {
                    console.log(data.places);
                    setPlayListData(() => data.places);
                });
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    console.log(playListData);

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
