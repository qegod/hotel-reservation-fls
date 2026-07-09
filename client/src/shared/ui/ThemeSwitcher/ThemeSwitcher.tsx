import Button from "../Button/Button.tsx";
import useTheme from "../../../app/providers/ThemeProvider/lib/useTheme.ts";

const ThemeSwitcher = () => {
    const {toggleTheme} = useTheme();

    return (
        <Button onClick={toggleTheme}>
            SwitchTheme
        </Button>
    );
};

export default ThemeSwitcher;
