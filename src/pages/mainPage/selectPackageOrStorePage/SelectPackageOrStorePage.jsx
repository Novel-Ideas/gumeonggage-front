/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SelectPackageOrStorePage() {
    return (
        <div css={s.layout}>
            <button css={s.selectWay}>
                <h1>포장</h1>
            </button>
            <button css={s.selectWay}>
                <h1>매장</h1>
            </button>
            <button css={s.adminButton}>관리자 모드</button>
        </div>
    );
}

export default SelectPackageOrStorePage;