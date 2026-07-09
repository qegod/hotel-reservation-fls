import './style/index.scss'
import AppRoutes from "./route/route.tsx";
import Navbar from "../widgets/Navbar/ui/Navbar.tsx";
import useTheme from "./providers/ThemeProvider/lib/useTheme.ts";
import {useAppDispatch} from "./providers/Redux/store/store.ts";
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
        <>
            <Navbar />
            <div className={`page-content`}>
                <AppRoutes />
            </div>
        </>
      )
}

export default App
