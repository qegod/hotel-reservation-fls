import './style/index.scss'
import AppRoutes from "./providers/route/route.tsx";
import Navbar from "../widgets/Navbar/ui/Navbar.tsx";
import useTheme from "./providers/ThemeProvider/lib/useTheme.ts";
import {useAppDispatch} from "./providers/StoreProvider/store/store.ts";
import {useEffect} from "react";
import {initAuthThunk} from "../features/auth";

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
            <Navbar className={'navbar'} />
            <div className={`page-content`}>
                <AppRoutes />
            </div>
        </div>
      )
}

export default App
