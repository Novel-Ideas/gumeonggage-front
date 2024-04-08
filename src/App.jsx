import { Reset } from "styled-reset";
import MenuRoute from "./routes/MenuRoute";
import PaymentMethod from "./pages/paymentMethodPage/PaymentMethod";
import PayList from "./pages/payListPage/PayList";
import PointAccumulation from "./pages/pointPage/pointAccumulation/PointAccumulation";
import PointPhoneNumber from "./pages/pointPage/pointPhoneNumber/PointPhoneNumber";

function App() {
    return (
        <>
            {/* <Reset />
            <MenuRoute /> */}
            {/* <PaymentMethod /> */}
            {/* <PayList /> */}
            {/* <PointAccumulation /> */}
            <PointPhoneNumber />
        </>
    );
}
export default App;
