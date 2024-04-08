import { Route, Routes } from "react-router-dom";
import MenuRoute from "./MenuRoute";
import AdminRoute from "./AdminRoute";
import AdminAuthPage from "../pages/adminPages/adminAuthPage/AdminAuthPage";

function HomeRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminAuthPage />} />
                <Route path="/selectMenu" />
                <Route path="/menu/*" element={
                    <MenuRoute />
                } />
                <Route path="/admin/*" element={
                    <AdminRoute />
                } />
            </Routes>
        </>
    );
}

export default HomeRoute;
