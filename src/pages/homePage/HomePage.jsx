/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const handlePageClick = () => {
        navigate("/menu/select");
    };

    return (
        <PageLayout>
            <div css={s.layout} onClick={handlePageClick}>
                <div css={s.content}>
                    <div css={s.imgbox}>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                        />
                    </div>
                    <h1 css={s.text}>화면을 터치 해주세요!</h1>
                </div>
            </div>
        </PageLayout>
    );
}

export default HomePage;
