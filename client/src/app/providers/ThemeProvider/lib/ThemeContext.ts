import {createContext} from "react";

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
} as const;

export type ThemeType = typeof THEMES[keyof typeof THEMES];

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (value: ThemeType) => void;
}


export const ThemeContext = createContext<ThemeContextType>({
    theme: THEMES.LIGHT,
    setTheme: (_value: ThemeType) => {}
});

export const THEME_LOCAL_STORAGE_KEY = 'theme';
