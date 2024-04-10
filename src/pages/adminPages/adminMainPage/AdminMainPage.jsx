/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import AdminPageLayout from '../../../components/pageComponents/adminPageLayout/AdminPageLayout';
import AdminMainPageTop3 from "../../../components/adminMainPageTop3/AdminMainPageTop3";

function AdminMainPage(props) {
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.boxLayout}>
                    <div css={s.fontLayout}>
                        <h1>Sales</h1>
                        <h1>매출</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            fds
                        </div>
                    </div>
                </div>
                <div css={s.boxLayout}>
                    <div css={s.fontLayout}>
                        <h1>TOP3</h1>
                        <h1>랭킹</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            <AdminMainPageTop3 />
                        </div>
                    </div>
                </div>
                <div>
                    <div css={s.fontLayout}>
                        <h1>Feedback</h1>
                        <h1>피드백</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            <div>d</div>
                            <div>d</div>
                            <div>d</div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMainPage;