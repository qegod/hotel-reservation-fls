import {Route, Routes} from "react-router";
import {AllRoutes} from "../../../shared/config/routes/AppRoutes.tsx";
import ProtectedRoute from "./ui/protectedRoute.tsx";
import {memo, Suspense} from "react";
import {useSelector} from "react-redux";
import {getUserName} from "../../../entities/user";
import Loader from "../../../shared/ui/Loader/Loader.tsx";

const AppRoutes = memo(() => {
    const isAuth = useSelector(getUserName)



    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {Object.entries(AllRoutes).map(([path, obj]) =>
                    <Route element={
                        <ProtectedRoute isAuth={Boolean(isAuth) === obj.isPrivate}>
                            {obj.element}
                        </ProtectedRoute>
                    } path={path}></Route>
                )}
            </Routes>
        </Suspense>

    );
});

export default AppRoutes;
