/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import AdminPageLayout from '../../../components/pageComponents/adminPageLayout/AdminPageLayout';

function AdminMainPage(props) {
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.salesLayout}>
                    <div css={s.fontLayout}>
                        <h1>Sales</h1>
                        <h1>매출</h1>
                    </div>
                    <div css={s.salesContainer}>
                        <div css={s.sales}>
                            fds
                        </div>
                    </div>
                </div>
                <div>
                    <div css={s.fontLayout}>
                        <h1>TOP3</h1>
                        <h1>랭킹</h1>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <div css={s.fontLayout}>
                        <h1>Feedback</h1>
                        <h1>피드백</h1>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMainPage;