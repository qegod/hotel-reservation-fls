import {memo} from "react";
import AppLink from "../../../../shared/ui/AppLink/AppLink.tsx";

const privateRoutes = { path: "/", name: 'Main' } // приватные маршруты
const publicRoutes = { path: "/auth", name: 'Auth' } // публичные маршруты

interface INavbarItems {
    isAuth: boolean | string | null;
}



export const NavbarItems = memo(({ isAuth }: INavbarItems) => {


    const items = isAuth ? [privateRoutes, publicRoutes] : [publicRoutes]

    return (
        <>
            {items.map(({path, name}) => (
                <AppLink key={path} to={path}>{name}</AppLink>
            ))}
        </>
);
});
