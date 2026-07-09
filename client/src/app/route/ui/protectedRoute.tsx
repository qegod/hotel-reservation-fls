import {Navigate, Outlet} from "react-router";
import {memo} from "react";

interface ProtectedRouteProps {
    isAuth: boolean | string | null;
}

const ProtectedRoute = memo(({isAuth}: ProtectedRouteProps) => {

    if(!isAuth) {
        return <Navigate to="/auth" replace/>
    }

    return <Outlet/>
});

export default ProtectedRoute;
