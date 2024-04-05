import { Reset } from "styled-reset";
import MenuPage from "./pages/menuPage/MenuPage";
import HomePage from "./pages/homePage/HomePage";
// import SelectPackageOrStorePage from "./pages/MainPage/SelectPackageOrStorePage/SelectPackageOrStorePage";
// import MenuCategory from "./components/menuCategory/MenuCategory";
function App() {
    return (
        <>
            <Reset />
            <MenuPage />
            <HomePage />
            {/* <SelectPackageOrStorePage /> */}
            {/* <MenuCategory /> */}
        </>
    );
}
export default App;
