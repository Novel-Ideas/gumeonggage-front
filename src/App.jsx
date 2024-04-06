import { Reset } from "styled-reset";
import MenuPage from "./pages/menuPage/MenuPage";
import HomePage from "./pages/homePage/HomePage";
import SelectPackageOrStorePage from "./pages/mainPage/selectPackageOrStorePage/SelectPackageOrStorePage";
import FeedbackWritePage from "./pages/feedbackPage/feedbackWritePage/FeedbackWritePage";
import MenuList from "./components/menuList/MenuList";

function App() {
    return (
        <>
            {/* <Reset />
            <MenuPage />
            <HomePage />
            <SelectPackageOrStorePage />
            <FeedbackWritePage /> */}
            {/* <SelectPackageOrStorePage /> */}
            {/* <MenuCategory /> */}
            <MenuList />
        
        </>
    );
}
export default App;
