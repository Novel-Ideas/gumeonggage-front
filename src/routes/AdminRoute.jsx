import { Route, Routes } from "react-router-dom";
import AdminMenuAdd from "../pages/adminPages/adminMenuAdd/AdminMenuAdd"
import AdminMainPage from "../pages/adminPages/adminMainPage/AdminMainPage";
import PasswordEditPage from "../pages/passwordEditPage/PasswordEditPage";
import AdminUserSearch from "../components/adminUserSearch/AdminUserSearch";

function AdminRoute(props) {
    return (
        <Routes>
            <Route path="/main" element={<AdminMainPage />}/>
            <Route path="/sale" />
            <Route path="/add" element={<AdminMenuAdd />}/>
            <Route path="/getmenu" />
            <Route path="/update" />
            <Route path="/delete" />
            <Route path="/feedback" />
            <Route path="/passwordedit" element={<PasswordEditPage />} />  
            <Route path="/usersearch" element={<AdminUserSearch />} />
        </Routes>
    );
}

export default AdminRoute;
