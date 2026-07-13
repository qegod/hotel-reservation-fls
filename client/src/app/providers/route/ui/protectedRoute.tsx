import {Navigate} from "react-router";
import {memo} from "react";

interface ProtectedRouteProps {
    isAuth: boolean;
    children: React.ReactNode;
}

const ProtectedRoute = memo(({isAuth, children}: ProtectedRouteProps) => {

    if(!isAuth) {
        return <Navigate to="/auth" replace/>
    }

    return children
});

export default ProtectedRoute;
