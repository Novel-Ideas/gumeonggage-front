/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdOutlineTakeoutDining } from "react-icons/md";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import PageLayout from "../../../components/pageComponents/PageLayout";

function SelectPackageOrStorePage() {
    return (
        <PageLayout>
            <div css={s.layout}>
                <button css={s.selectWay}>
                    <MdOutlineTakeoutDining />
                    <h1>포장</h1>
                </button>
                <button css={s.selectWay}>
                    <MdOutlineTableRestaurant />
                    <h1>매장</h1>
                </button>
                <button css={s.adminButton}>
                    <AiOutlineHome />
                </button>
            </div>
        </PageLayout>
    );
}

export default SelectPackageOrStorePage;
