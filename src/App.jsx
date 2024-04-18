import { Reset } from "styled-reset";
import HomeRoute from "./routes/HomeRoute";
import PointCheck from "./pages/pointPage/pointCheck/PointCheck";
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

//임시 커밋