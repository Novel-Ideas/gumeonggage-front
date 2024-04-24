/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { playDataListState } from "../../../atoms/playDataListAtom";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import PlayMap from "../playMap/PlayMap";
import { playDataState } from "../../../atoms/playDataAtom";
import { useNavigate } from "react-router-dom";

function PlayList() {
    const [playListData, setPlayListData] = useRecoilState(playDataListState);
    const [playData, setPlayData] = useRecoilState(playDataState);
    const navigate = useNavigate();
    const handlePageClick = () => {
        navigate("/menu/playlist/map");
    };

    const handleSubmitClick = (id) => {
        const playList = playListData.filter((data) => data.id === id)[0];

        if (playListData.id !== playList?.id) {
            setPlayData(() => playList);
        }
    };

    useEffect(() => {
        setPlayData(playListData[0]);
    }, [playListData]);

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
            <div css={s.contentLayout}>
                <div css={s.container}>
                    <div css={s.top}>
                        <button css={s.mapButton} onClick={handlePageClick}>
                            지도 보기
                        </button>
                    </div>
                    <div css={s.bodyContainer}>
                        {playData && (
                            <>
                                <div css={s.name}>
                                    {playData.displayName?.text !== undefined
                                        ? playData?.displayName?.text
                                        : "정보없음"}

                                    {playData.currentOpeningHours !==
                                    undefined ? (
                                        playData.currentOpeningHours.openNow ===
                                        true ? (
                                            <span
                                                css={s.openNow(
                                                    playData.currentOpeningHours
                                                        .openNow
                                                )}
                                            >
                                                OPEN
                                            </span>
                                        ) : (
                                            <span
                                                css={s.openNow(
                                                    playData.currentOpeningHours
                                                        .openNow
                                                )}
                                            >
                                                CLOSE
                                            </span>
                                        )
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div css={s.text}>
                                    <FaStar />{" "}
                                    {playData.rating !== undefined
                                        ? playData?.rating
                                        : "정보없음"}
                                </div>
                                <div css={s.text}>
                                    <MdPlace />{" "}
                                    {playData.formattedAddress !== undefined
                                        ? playData?.formattedAddress
                                        : "정보없음"}
                                </div>
                                <div css={s.text}>
                                    <IoIosPhonePortrait />{" "}
                                    {playData.nationalPhoneNumber !== undefined
                                        ? playData?.nationalPhoneNumber
                                        : "정보없음"}
                                </div>
                                <div css={s.text}>
                                    <FaRegClock />{" "}
                                    <ul>
                                        {playData.currentOpeningHours !==
                                        undefined
                                            ? playData?.currentOpeningHours.weekdayDescriptions.map(
                                                  (hours, index) => (
                                                      <li key={index}>
                                                          {hours}
                                                      </li>
                                                  )
                                              )
                                            : "정보없음"}
                                    </ul>
                                </div>
                                <div css={s.review}>
                                    Review{" "}
                                    <ul>
                                        {playData?.reviews !== undefined
                                            ? playData?.reviews?.map(
                                                  (review, index) => (
                                                      <li key={index}>
                                                          {review?.text?.text}
                                                      </li>
                                                  )
                                              )
                                            : "정보없음"}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayList;
