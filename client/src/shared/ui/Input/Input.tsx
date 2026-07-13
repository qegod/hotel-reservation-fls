import cls from './Input.module.scss'
import {classNames} from "../../lib/classNames/classNames.ts";

type InputType = React.InputHTMLAttributes<HTMLInputElement>

interface InputProps extends Omit<InputType, `onChange`>  {
    className?: string
    onChange?: (value: string) => void
    value?: string | number
}

const Input = (props: InputProps) => {
    const {
        className,
        onChange,
        value
    } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value)
    }

    return (
        <input
            className={classNames(cls.Input, [className])}
            onChange={handleChange}
            value={value}
        />
    );
};

export default Input;
