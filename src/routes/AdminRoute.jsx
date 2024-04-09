import { Route, Routes } from "react-router-dom";
import AdminMenuAdd from "../pages/adminPages/adminMenuAdd/AdminMenuAdd"
import AdminPageLayout from "../components/pageComponents/adminPageLayout/AdminPageLayout";

function AdminRoute(props) {
    return (
        <Routes>
            <Route path="/main" />
            <Route path="/sale" />
            <Route path="/add" element={<AdminMenuAdd />}/>
            <Route path="/getmenu" />
            <Route path="/update" />
            <Route path="/delete" />
            <Route path="/feedback" />
        </Routes>
    );
}

export default AdminRoute;
