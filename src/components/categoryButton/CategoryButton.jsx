/**@jsxImportSource @emotion/react */
import * as s from "./style";

function CategoryButton({ icon, categoryName, onclick }) {
    return (
        <div css={s.categoryLayout}>
            <button css={s.category} onClick={onclick}>
                <div css={s.imglayout}>{icon}</div>
                <div css={s.categoryTitleLayout}>
                    <h1 css={s.categoryfont}>{categoryName}</h1>
                </div>
            </button>
        </div>
    );
}

export default CategoryButton;
