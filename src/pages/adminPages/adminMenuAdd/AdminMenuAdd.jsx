/** @jsxImportSource @emotion/react */
import PageLayout from "../../../components/pageComponents/pageLayout/PageLayout";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import * as s from "./style";

function AdminMenuAdd() {
    return (
            <AdminPageLayout>
                <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>메뉴 추가</h1>
                </div>
                <div css={s.addAndCancleBox}>
                    <button css={s.addAndCancle}>저장</button>
                    <button css={s.addAndCancle}>취소</button>
                </div>
                <div css={s.tableLayout}>
                    <table css={s.tableContainer}>
                        <tr>
                            <td css={s.tableHeader}>Menu Id</td>
                            <td css={s.table}><input css={s.inputBox}></input></td>
                            <td colSpan="3" css={s.img}>이미지</td>
                        </tr>
                        <tr>
                            <td css={s.tableHeader}>Category Id</td>
                            <td css={s.table}><input css={s.inputBox}></input></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td css={s.tableHeader}>Menu Name</td>
                            <td css={s.table}><input css={s.inputBox}></input></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td css={s.tableHeader}>Menu Price</td>
                            <td css={s.table}><input css={s.inputBox}></input></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td css={s.tableHeader}>Menu Img Url</td>
                            <td css={s.table}><input css={s.inputBox}></input></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td css={s.tableHeader}>Menu Cal</td>
                            <td css={s.table}><input css={s.inputBox}></input></td>
                            <td></td>
                        </tr>

                    </table>
                </div>
                </div>
            </AdminPageLayout>

    );
}

export default AdminMenuAdd;