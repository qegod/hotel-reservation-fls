import {AuthPage} from "../../../pages/AuthPage";
import {MainPage} from "../../../pages/MainPage";
import {Navigate} from "react-router";
import HotelsDetailsPage from "../../../pages/HotelsDetailsPage/ui/HotelsDetailsPage.tsx";

export const AllRoutes = {
    public: {
        '/auth': <AuthPage/>
    },

    private: {
        '/': <MainPage/>,


        '/hotels/:id': <HotelsDetailsPage/>,
        '*': <Navigate to={'/'} replace/>
    }
}

