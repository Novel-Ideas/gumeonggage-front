/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import { useNavigate } from "react-router-dom";

function SelectAdminPage(props) {
    const navigate = useNavigate();
    const handleAdminButtonClick = () => {
        navigate("/admin/main");
    };
    const handleUserButtonClick = () => {
        navigate("/menu/main");
    };
    return (
        <PageLayout>
            <div css={s.layout}>
                <button css={s.selectWay} onClick={handleAdminButtonClick}>
                    <FaUserGear />
                    <h1>관리자 모드</h1>
                </button>
                <button css={s.selectWay} onClick={handleUserButtonClick}>
                    <MdOutlineTableRestaurant />
                    <h1>사용자 모드</h1>
                </button>
            </div>
        </PageLayout>
    );
}

export default SelectAdminPage;
