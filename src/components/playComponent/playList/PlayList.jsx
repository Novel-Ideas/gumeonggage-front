/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { playDataListState } from "../../../atoms/playDataListAtom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayInfo from "../playInfo/PlayInfo";
import { FaStar } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import PlayMap from "../playMap/PlayMap";

function PlayList() {
    const [playListData, setPlayListData] = useRecoilState(playDataListState);
    const [selectedPlayList, setSelectedPlayList] = useState("");
    const handlePageClick = () => {
        <PlayMap />;
    };

    const handleSubmitClick = (id) => {
        console.log(id);

        const playList = playListData.filter((data) => data.id === id)[0];
        console.log(playListData);
        if (playListData.id !== playList?.id) {
            setSelectedPlayList(playList);
        }
        // console.log(playList.id);
    };
    console.log(playListData);

    useEffect(() => {}, [playListData]);

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
                        <button
                            css={s.mapButton}
                            onClick={() => handlePageClick()}
                        >
                            지도 보기
                        </button>
                    </div>
                    <div css={s.bodyContainer}>
                        {selectedPlayList && (
                            <>
                                <div
                                    css={s.name}
                                    onClick={() =>
                                        handleSubmitClick(
                                            selectedPlayList.displayName
                                        )
                                    }
                                >
                                    {selectedPlayList.displayName.text !==
                                    undefined
                                        ? selectedPlayList.displayName.text
                                        : "정보없음"}
                                </div>
                                <div css={s.text}>
                                    <FaStar /> 별점
                                </div>
                                <div
                                    css={s.text}
                                    onClick={() =>
                                        handleSubmitClick(
                                            selectedPlayList.formattedAddress
                                        )
                                    }
                                >
                                    <MdPlace />{" "}
                                    {selectedPlayList.formattedAddress !==
                                    undefined
                                        ? selectedPlayList.formattedAddress
                                        : "정보없음"}
                                </div>
                                <div
                                    css={s.text}
                                    onClick={() =>
                                        handleSubmitClick(
                                            selectedPlayList.nationalPhoneNumber
                                        )
                                    }
                                >
                                    <IoIosPhonePortrait />{" "}
                                    {selectedPlayList.nationalPhoneNumber !==
                                    undefined
                                        ? selectedPlayList.nationalPhoneNumber
                                        : "정보없음"}
                                </div>
                                <div
                                    css={s.text}
                                    onClick={() =>
                                        handleSubmitClick(
                                            selectedPlayList.periods
                                        )
                                    }
                                >
                                    <FaRegClock />{" "}
                                    {selectedPlayList.periods !== undefined
                                        ? selectedPlayList.periods
                                        : "정보없음"}
                                </div>
                                <div
                                    css={s.review}
                                    onClick={() =>
                                        handleSubmitClick(selectedPlayList.text)
                                    }
                                >
                                    Review{" "}
                                    {selectedPlayList.reviews.text !== undefined
                                        ? selectedPlayList.reviews.text
                                        : "정보없음"}
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
