import { memo } from "react";
import {classNames} from "../../lib/classNames/classNames.ts";
import cls from './Button.module.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    theme?: ButtonThemeType;
    className?: string;
}

type ButtonThemeType = typeof ButtonTheme[keyof typeof ButtonTheme];

export const ButtonTheme = {
    PRIMARY: 'primary',
    OUTLINE: 'outline'
} as const;



const Button = memo((props: ButtonProps) => {
    const {
        children,
        theme = ButtonTheme.PRIMARY,
        className,
        ...other
    } = props

    return (
        <button {...other} className={classNames(cls.Button, [cls[theme], className])}>
            {children}
        </button>
    )
})

export default Button;
