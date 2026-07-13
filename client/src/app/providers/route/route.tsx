import {Route, Routes} from "react-router";
import {AllRoutes} from "../../shared/config/routes/AppRoutes.tsx";
import ProtectedRoute from "./ui/protectedRoute.tsx";
import {memo} from "react";
import {useSelector} from "react-redux";
import {getUserName} from "../../entities/user";

const AppRoutes = memo(() => {
    const auth = useSelector(getUserName)



    return (
        <Routes>
            {Object.entries(AllRoutes.public).map(([key, value]) => (
                <Route key={key} path={key} element={value} />
            ))}
            <Route element={<ProtectedRoute isAuth={auth} />}>
                {Object.entries(AllRoutes.private).map(([key, value]) => (
                    <Route key={key} path={key} element={value} />
                ))}
            </Route>
        </Routes>
    );
});

export default AppRoutes;
