import {THEME_LOCAL_STORAGE_KEY, ThemeContext, THEMES, type ThemeType} from "../lib/ThemeContext.ts";
import {useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeType || THEMES.LIGHT

interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: ThemeType;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<ThemeType>(initialTheme || defaultTheme);


    const contextValue = useMemo(() => {
        return {
            theme,
            setTheme,
        };
    }, [theme]);


    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )

}
