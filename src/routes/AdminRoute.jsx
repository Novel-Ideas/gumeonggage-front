import { Route, Routes } from "react-router-dom";
import AdminMenuAdd from "../pages/adminPages/adminMenuAdd/AdminMenuAdd"
import AdminMainPage from "../pages/adminPages/adminMainPage/AdminMainPage";
import AdminMenuSearch from "../pages/adminPages/adminMenuSearch/AdminMenuSearch";
import AdminFeedbackPage from "../pages/adminPages/adminFeedbackPage/AdminFeedbackPage";
import PasswordEditPage from "../pages/passwordEditPage/PasswordEditPage";
import AdminUserSearch from "../components/adminUserSearch/AdminUserSearch";
import AdminImgPage from "../pages/adminPages/adminImgPage/AdminImgPage";

function AdminRoute(props) {
    return (
        <Routes>
            <Route path="/sale" />
            <Route path="/main" element={<AdminMainPage />}/>
            <Route path="/add" element={<AdminMenuAdd />}/>
            <Route path="/getmenu/*" element={<AdminMenuSearch/>}/>
            <Route path="/delete" />
            <Route path="/passwordedit" element={<PasswordEditPage />} />  
            <Route path="/usersearch" element={<AdminUserSearch />} />
            <Route path="/feedback" element={<AdminFeedbackPage/>}/>
            <Route path="/img" element={<AdminImgPage/>}/>
        </Routes>
    );
}

export default AdminRoute;
