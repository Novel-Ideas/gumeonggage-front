/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import img from "../../assets/맥도날드.svg";
import { TbArrowBigLeftFilled } from "react-icons/tb";

function HomePage() {
    const navigate = useNavigate();
    const handlePageClick = () => {
        navigate("/menu/select");
    };

    const handlebackButtonClick = () => {
        navigate("/selectmenu");
    };

    return (
        <PageLayout>
            <div css={s.buttonLayout}>
                <button css={s.backButton} onClick={handlebackButtonClick}>
                    <TbArrowBigLeftFilled />
                </button>
            </div>
            <div css={s.layout} onClick={handlePageClick}>
                <div css={s.content}>
                    <div css={s.imgBox}>
                        <img src={img} alt="" />
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
