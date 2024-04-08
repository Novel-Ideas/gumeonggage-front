import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SelectPackageOrStore from "../pages/mainPage/selectPackageOrStorePage/SelectPackageOrStorePage";
import MenuPage from "../pages/menuPage/MenuPage";
import FeedbackWritePage from "../pages/feedbackPage/feedbackWritePage/FeedbackWritePage";
import FeedbackOkPage from "../pages/feedbackPage/feedbackOkPage/FeedbackOkPage";

function MenuRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/select" element={<SelectPackageOrStore />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/feedback" element={<FeedbackWritePage />} />
                <Route path="/feedback/ok" element={<FeedbackOkPage />} />
            </Routes>
        </>
    );
}

export default MenuRoute;