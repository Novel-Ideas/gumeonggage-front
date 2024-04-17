import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SelectPackageOrStore from "../pages/mainPage/selectPackageOrStorePage/SelectPackageOrStorePage";
import MenuPage from "../pages/menuPage/MenuPage";
import FeedbackWritePage from "../pages/feedbackPage/feedbackWritePage/FeedbackWritePage";
import FeedbackOkPage from "../pages/feedbackPage/feedbackOkPage/FeedbackOkPage";
import PointAccumulation from "../pages/pointPage/pointAccumulation/PointAccumulation";
import FeedbackChoicePage from "../pages/feedbackPage/feedbackChoicePage/FeedbackChoicePage";

function MenuRoute(props) {
    return (
        <Routes>
            <Route path="/main" element={<HomePage />} />
            <Route path="/select" element={<SelectPackageOrStore />} />
            <Route path="/menuall/*" element={<MenuPage />} />
            <Route path="/point" element={<PointAccumulation />} />
            <Route path="/feedbackChoice" element={<FeedbackChoicePage />} />
            <Route path="/feedback" element={<FeedbackWritePage />} />
            <Route path="/feedback/ok" element={<FeedbackOkPage />} />
        </Routes>
    );
}

export default MenuRoute;
