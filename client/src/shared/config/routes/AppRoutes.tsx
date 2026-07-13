import {AuthPage} from "../../../pages/AuthPage";
import {MainPage} from "../../../pages/MainPage";
import {Navigate} from "react-router";
import HotelsDetailsPage from "../../../pages/HotelsDetailsPage/ui/HotelsDetailsPage.tsx";
import {HotelsPage} from "../../../pages/HotelsPage";
import type {ReactNode} from "react";
import CreateHotelPage from "../../../pages/CreateHotelPage/ui/CreateHotelPage.tsx";

export interface IRouteConfig {
    element: ReactNode,
    isPrivate: boolean;
}

type AllRoutesType = {
    [key: string]: IRouteConfig;
}

const AppPath = {
    main: '/',
    hotels: '/hotels',
    hotelsDetails: '/hotels/:id',
    auth: '/auth',
    creatHotel: '/hotels-create',

    notFound: '*'
}


export const AllRoutes: AllRoutesType = {
    [AppPath.main]: { element: <MainPage />, isPrivate: true },
    [AppPath.hotels]: { element: <HotelsPage />, isPrivate: true },
    [AppPath.hotelsDetails]: { element: <HotelsDetailsPage />, isPrivate: true },
    [AppPath.auth]: { element: <AuthPage />, isPrivate: false },
    [AppPath.creatHotel]: {element: <CreateHotelPage/>, isPrivate: true },

    [AppPath.notFound]: {element: <Navigate to={'/'}/>, isPrivate: false} // 404 маршрут
};
