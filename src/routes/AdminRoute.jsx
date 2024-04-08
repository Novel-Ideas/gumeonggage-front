import { Route, Routes } from "react-router-dom";

function AdminRoute(props) {
    return (
        <Routes>
            <Route path="/main" />
            <Route path="/sale" />
            <Route path="/add" />
            <Route path="/getmenu" />
            <Route path="/update" />
            <Route path="/delete" />
            <Route path="/feedback" />
        </Routes>
    );
}

export default AdminRoute;
