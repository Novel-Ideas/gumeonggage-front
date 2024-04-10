/** @jsxImportSource @emotion/react */
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import * as s from "./style";
import { GrPowerReset } from "react-icons/gr";
import noImg from "../../../assets/noImg.webp";

function AdminMenuAdd() {
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 추가</div>
                </div>
                <div css={s.main}>
                    <div css={s.resetLayout}>
                        <button>
                            <GrPowerReset />
                        </button>
                    </div>
                    <div css={s.addLayout}>
                        <div css={s.addBox}>
                            <div css={s.imgLayout}>
                                <div css={s.imgBox}>
                                    <img src={noImg} alt="" />
                                </div>
                            </div>
                            <div css={s.inputLayout}>인풋</div>
                        </div>
                    </div>
                </div>
                <div css={s.footer}>
                    <div>
                        <button>저장</button>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMenuAdd;
