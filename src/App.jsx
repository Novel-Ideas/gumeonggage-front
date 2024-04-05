import { Reset } from "styled-reset";
import MenuPage from "./pages/menuPage/MenuPage";
import HomePage from "./pages/homePage/HomePage";
import SelectPackageOrStorePage from "./pages/mainPage/selectPackageOrStorePage/SelectPackageOrStorePage";
import FeedbackWritePage from "./pages/feedbackPage/feedbackWritePage/FeedbackWritePage";

function App() {
    return (
        <>
            <Reset />
            <MenuPage />
            <HomePage />
            <SelectPackageOrStorePage />
            <FeedbackWritePage />
        </>
    );
}
export default App;
