import { Route, Routes } from "react-router-dom";
import AdminMenuAdd from "../pages/adminPages/adminMenuAdd/AdminMenuAdd"
import AdminMainPage from "../pages/adminPages/adminMainPage/AdminMainPage";
import AdminMenuSearch from "../pages/adminPages/adminMenuSearch/AdminMenuSearch";

function AdminRoute(props) {
    return (
        <Routes>
            <Route path="/main" element={<AdminMainPage />}/>
            <Route path="/sale" />
            <Route path="/add" element={<AdminMenuAdd />}/>
            <Route path="/getmenu" element={<AdminMenuSearch/>}/>
            <Route path="/update" />
            <Route path="/delete" />
            <Route path="/feedback" />
        </Routes>
    );
}

export default AdminRoute;
