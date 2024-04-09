/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import burger from "../../assets/burger.png";

function HomePage() {
    const navigate = useNavigate();
    const handlePageClick = () => {
        navigate("/menu/select");
    };

    return (
        <PageLayout>
            <div css={s.layout} onClick={handlePageClick}>
                <div css={s.content}>
                    <div css={s.imgBox}>
                        <img
                            src={burger}
                            alt=""
                        />
                    </div>
                    <div css={s.text}>
                        <h1>화면을 터치해 주세요!</h1>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default HomePage;
