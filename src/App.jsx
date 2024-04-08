import { Reset } from "styled-reset";
import MenuRoute from "./routes/MenuRoute";
import PaymentMethod from "./pages/payment Method/PaymentMethod";
import PayList from "./pages/payList/PayList";
import PointAccumulation from "./pages/pointAccumulation/PointAccumulation";
import AdminAuthPage from "./pages/adminPages/adminAuthPage/AdminAuthPage";
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
            <AdminAuthPage />
            <PointPhoneNumber />
        </>
    );
}
export default App;
