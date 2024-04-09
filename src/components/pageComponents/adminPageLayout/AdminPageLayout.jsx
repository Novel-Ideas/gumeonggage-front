/**@jsxImportSource @emotion/react */
import SideBar from "../../sideBar/SideBar";
import * as s from "./style";

function AdminPageLayout({ children }) {
    return  <div css={s.layout}>
        <SideBar />
        {children}
    </div>;
}

export default AdminPageLayout;