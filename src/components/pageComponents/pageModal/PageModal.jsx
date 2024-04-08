/**@jsxImportSource @emotion/react */
import * as s from "./style";

function PageModal({ children }) {
    return (
        <>
            <div css={s.layout}>
                <div css={s.modal}>{children}</div>
            </div>
        </>
    );
}

export default PageModal;
