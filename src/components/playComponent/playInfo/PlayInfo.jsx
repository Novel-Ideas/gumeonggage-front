/**@jsxImportSource @emotion/react */ 
import * as s from "./style";
import { useEffect, useState } from "react";

function PlayInfo({playListData, handleSubmitClick}) {
    const [ playInfo, setPlayInfo ] = useState();

    useEffect(() => {
        setPlayInfo(
            () => 
            playListData.map((data) => {
            })
        )
    }, [playListData])
    console.log(handleSubmitClick.id);

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.top}>
                    <div css={s.mapButton}>지도 보기</div>
                </div>
                <div css={s.bodyContainer}>
                    <div css={s.name}>{playInfo}</div> 
                    <div css={s.text}>별점</div>
                    <div css={s.text}>주소</div>
                    <div css={s.text}>전화번호</div>
                    <div css={s.text}>영업시간</div>
                    <div css={s.review}>리뷰</div>
                    </div>
            </div>
        </div>
    );
}

export default PlayInfo;
