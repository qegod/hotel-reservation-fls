import cls from './TextArea.module.scss'
import {classNames} from "../../lib/classNames/classNames.ts";
import {memo} from "react";

type TextAreaType = React.HTMLProps<HTMLTextAreaElement>

interface TextAreaProps extends Omit<TextAreaType, 'onChange'>  {
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
}

const TextArea = memo((props: TextAreaProps) => {

    const {
        className,
        onChange,
        value
    } = props;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }


    return (
        <textarea className={classNames(cls.TextArea, [className])} value={value} onChange={handleChange}>

        </textarea>
    );
});

export default TextArea;
