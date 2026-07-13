import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import {BrowserRouter} from 'react-router'
import './app/style/reset.scss'
import {ThemeProvider} from "./app/providers/ThemeProvider/ui/ThemeProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./app/providers/StoreProvider";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
)
