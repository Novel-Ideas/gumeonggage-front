import { Route, Routes } from "react-router-dom";

function AdminRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/admin/main'/>
                <Route path='/admin/sale'/>
                <Route path='/admin/add'/>
                <Route path='/admin/getmenu'/>
                <Route path='/admin/update'/>
                <Route path='/admin/delete'/>
                <Route path='/admin/feedback'/>
            </Routes>
        </>
    );
}

export default AdminRoute;