/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import { Link } from "react-router-dom";
import PageLayout from "../pageComponents/pageLayout/PageLayout";

function SideBar() {
    return (
        <PageLayout>
            <div css={s.container}>
                <div css={s.layout}>
                        <div css={s.homeLayout}>
                            <Link to={"/admin/main"} css={s.home}>Home</Link>
                        </div>
                        <div css={s.salesLayout}>
                            <h1 css={s.font}>매출</h1>
                            <Link to={"/admin/sale"} css={s.link}>매출 조회</Link>
                        </div>
                        <div css={s.menuLayout}>
                            <h1 css={s.font}>메뉴</h1>
                            <Link to={"/admin/add"} css={s.link}>메뉴 추가</Link>
                            <Link to={"/admin/getmenu"} css={s.link}>메뉴 조회</Link>
                        </div>
                        <div css={s.feedbackLayout}>
                            <h1 css={s.font}>피드백</h1>
                            <Link to={"/admin/feedback"} css={s.link}>피드백 조회</Link>
                        </div>
                        <div css={s.userLayout}>
                            <h1 css={s.font}>회원관리</h1>
                            <Link to={"/admin/usersearch"} css={s.link}>회원 조회</Link>
                        </div>
                </div>
            </div>  
        </PageLayout>
    );
}

export default SideBar;