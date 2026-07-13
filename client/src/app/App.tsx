import './style/index.scss'
import {useAppDispatch} from "@/app/providers/StoreProvider";
import {useEffect} from "react";
import {initAuthThunk} from "@/features/auth";
import Navbar from "@/widgets/Navbar/ui/Navbar.tsx";
import AppRoutes from "@/app/providers/route/route.tsx";
import useTheme from "@/app/providers/ThemeProvider/lib/useTheme.ts";

function App() {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        dispatch(initAuthThunk());
    }, [dispatch])

    return (
        <div className="app">
            <Navbar className={'navbar'}/>
            <div className={`page-content`}>
                <AppRoutes/>
            </div>
        </div>
    )
}

export default App
