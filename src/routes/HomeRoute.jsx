import { Route, Routes } from "react-router-dom";
import MenuRoute from "./MenuRoute";
import AdminRoute from "./AdminRoute";
import AdminAuthPage from "../pages/adminPages/adminAuthPage/AdminAuthPage";
import SelectAdminPage from "../pages/selectAdminPage/SelectAdminPage";
import AdminSignupPage from "../pages/adminPages/adminSignupPage/AdminSignupPage";
import { useQuery } from "react-query";
import { getPricipalRequest } from "../apis/api/principal";

function HomeRoute(props) {
    const principalQuery = useQuery(["principalQuery"], getPricipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("onSuccess");
            console.log(response);
        },
        onError: (error) => {
            console.log("오류");
            console.log(error);
        },
    });

    return (
        <>
            {principalQuery.isLoading ? (
                <></>
            ) : (
                <Routes>
                    <Route path="/" element={<AdminAuthPage />} />
                    <Route path="/selectmenu" element={<SelectAdminPage />} />
                    <Route path="/adminsignup" element={<AdminSignupPage />} />
                    <Route path="/menu/*" element={<MenuRoute />} />
                    <Route path="/admin/*" element={<AdminRoute />} />
                </Routes>
            )}
        </>
    );
}

export default HomeRoute;

//임시 주석
