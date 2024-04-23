/**@jsxImportSource @emotion/react */ import * as s from "./style";

function PlayInfo(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.top}>
                    <div css={s.mapButton}>지도 보기</div>
                </div>
                <div css={s.bodyContainer}>
                    <div css={s.name}>가게 이름</div>
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
