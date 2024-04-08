import { Route, Routes } from "react-router-dom";
import MenuRoute from "./MenuRoute";
import AdminRoute from "./AdminRoute";
import AdminAuthPage from "../pages/adminPages/adminAuthPage/AdminAuthPage";

function HomeRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/sigin" element={<AdminAuthPage/>}>
                    <Route path="/selectMenu">
                        <MenuRoute />
                        <AdminRoute />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default HomeRoute;