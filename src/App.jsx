import { Reset } from "styled-reset";
import MenuList from "./components/menuList/MenuList";
import MenuRoute from "./routes/MenuRoute";

function App() {
    return (
        <>
            <Reset />
            <MenuRoute />
            <MenuList />
        </>
    );
}
export default App;
