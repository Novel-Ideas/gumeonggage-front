import { Reset } from "styled-reset";
import HomeRoute from "./routes/HomeRoute";
import PointPhoneNumber from "./pages/pointPage/pointPhoneNumber/PointPhoneNumber";

function App() {
    return (
        <>
            <Reset />
            <HomeRoute />
            <PointPhoneNumber />
        </>
    );
}
export default App;