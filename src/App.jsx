import { Reset } from "styled-reset";
import MenuPage from "./pages/menuPage/MenuPage";
import HomePage from "./pages/homePage/HomePage";
import SelectPackageOrStorePage from "./pages/mainPage/selectPackageOrStorePage/SelectPackageOrStorePage";
import FeedbackWritePage from "./pages/feedbackPage/feedbackWritePage/FeedbackWritePage";
import FeedbackOkPage from "./pages/feedbackPage/feedbackOkPage/FeedbackOkPage";

function App() {
    return (
        <>
            <Reset />
            <MenuPage />
            <HomePage />
            <SelectPackageOrStorePage />
            <FeedbackWritePage />
            <FeedbackOkPage />
            {/* <SelectPackageOrStorePage /> */}
            {/* <MenuCategory /> */}
        </>
    );
}
export default App;
