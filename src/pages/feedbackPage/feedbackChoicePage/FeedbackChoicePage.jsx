/** @jsxImportSource @emotion/react */
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

function FeedbackChoicePage(props) {
    const navigate = useNavigate();
    const handleFeedbackClick = () => {
        navigate("/menu/feedback");
    };
    const handleAddMenuClick = () => {
        navigate("/menu/menuall");
    };
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}></h1>
                </div>
                <div css={s.paybox}>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox} onClick={handleAddMenuClick}>
                            <h1>추가 주문하기</h1>
                        </div>
                    </div>
                    <div css={s.methodLayout}>
                        <div css={s.methodBox} onClick={handleFeedbackClick}>
                            <h1>후기 작성하기</h1>
                        </div>
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button css={s.next}>
                        건너뛰기
                    </button>
                </div>
            </div> 
        </PageModal>
    );
}

export default FeedbackChoicePage;