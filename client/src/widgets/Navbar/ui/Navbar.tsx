import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import ThemeSwitcher from "../../../shared/ui/ThemeSwitcher/ThemeSwitcher.tsx";
import cls from './Navbar.module.scss'
import {NavbarItems} from "./NavbarItems/NavbarItems.tsx";
import {useSelector} from "react-redux";
import {getUserName, userActions} from "@/entities/user";
import Button, {ButtonTheme} from "../../../shared/ui/Button/Button.tsx";
import {memo, useCallback} from "react";
import {LOCAL_STORAGE_TOKEN} from "@/shared/config/api/baseApi.ts";
import {useAppDispatch} from "@/app/providers/StoreProvider";

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({className}: NavbarProps) => {
    const isAuth = useSelector(getUserName)
    const dispatch = useAppDispatch();

    const logout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        dispatch(userActions.removeUser());
    }, [dispatch])

    return (
        <div className={classNames(cls.Navbar, [className])}>
            <div className={cls.buttons}>
                <ThemeSwitcher/>
                {isAuth &&
                    <>
                        <Button onClick={logout} theme={ButtonTheme.OUTLINE} className={cls.logout}>Logout</Button>
                        <h3 className={cls.user}>user: {isAuth}</h3>
                    </>
                }
            </div>

            <div className={cls.NavbarItems}>
                <NavbarItems isAuth={isAuth} />
            </div>
        </div>
    );
});

export default Navbar;
