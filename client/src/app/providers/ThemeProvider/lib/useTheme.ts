import {useContext} from "react";
import {THEME_LOCAL_STORAGE_KEY, ThemeContext, THEMES} from "./ThemeContext.ts";


const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
    }

    return {theme, toggleTheme};
};

export default useTheme;
