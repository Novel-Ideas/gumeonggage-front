import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SelectPackageOrStore from "../pages/mainPage/selectPackageOrStorePage/SelectPackageOrStorePage";
import MenuPage from "../pages/menuPage/MenuPage";
import FeedbackWritePage from "../pages/feedbackPage/feedbackWritePage/FeedbackWritePage";
import FeedbackOkPage from "../pages/feedbackPage/feedbackOkPage/FeedbackOkPage";
import PointAccumulation from "../pages/pointPage/pointAccumulation/PointAccumulation";
import PlayRecPage from "../pages/playPage/playRecPage/PlayRecPage";
import PointCheck from "../pages/pointPage/pointCheck/PointCheck";
import PointPhoneNumber from "../pages/pointPage/pointPhoneNumber/PointPhoneNumber";

function MenuRoute(props) {
    return (
        <Routes>
            <Route path="/main" element={<HomePage />} />
            <Route path="/select" element={<SelectPackageOrStore />} />
            <Route path="/menuall/*" element={<MenuPage />} />
            <Route path="/point" element={<PointAccumulation />} />
            <Route path="/pointphone" element={<PointPhoneNumber />} />
            <Route path="/feedback" element={<FeedbackWritePage />} />
            <Route path="/feedback/ok" element={<FeedbackOkPage />} />
            <Route path="/play" element={<PlayRecPage />} />
            <Route path="/point/check" element={<PointCheck />} />
        </Routes>
    );
}

export default MenuRoute;
