/**@jsxImportSource @emotion/react */ import { useRecoilState } from "recoil";
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

    
    // const registerPlayMutation = useMutation({
    //     mutationKey: "registerPlayMutation",
    //     mutationFn: playListDataRequest,
    //     onSuccess: (response) => {
    //         console.log(response.id)
    //     },
    //     onError: (error) => {},
    // });

    {/*가게이름:displayName, 주소: formattedAddress, 전화번호 :  nationalPhoneNumber 영업시간: periods, open,close , 리뷰: reviews

*/}

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
