import { Reset } from "styled-reset";
import MenuPage from "./pages/menuPage/MenuPage";
import HomePage from "./pages/homePage/HomePage";
import SelectPackageOrStorePage from "./pages/MainPage/SelectPackageOrStorePage/SelectPackageOrStorePage";

function App() {
    return (
        <>
            <Reset />
            <MenuPage />
            <HomePage />
            <SelectPackageOrStorePage />
        </>
    );
}
export default App;
