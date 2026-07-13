import {memo} from "react";
import AppLink from "../../../../shared/ui/AppLink/AppLink.tsx";

const privateRoutes = {
    Main: '/',
    Hotels: '/hotels',
    CreateHotel: '/hotels-create',

} // приватные маршруты

interface INavbarItems {
    isAuth: boolean | string | null;
}


export const NavbarItems = memo(({ isAuth }: INavbarItems) => {


   if(!isAuth) return null;


    return (
        <>
            {Object.entries(privateRoutes).map(([name, path]) => (
                <AppLink key={path} to={path}>{name}</AppLink>
            ))}
        </>
);
});
