import cls from './InputFile.module.scss'
import {classNames} from "../../lib/classNames/classNames.ts";
import type {ChangeEvent} from "react";

interface InputFileProps {
    className?: string
    onChange?: (files: File[]) => void
}

const InputFile = (props: InputFileProps) => {

    const {
        className,
        onChange,
    } = props

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;

        onChange(Array.from(e.target.files));
    }


    return (
        <input type={'file'} onChange={handleChange} className={classNames(cls.InputFile, [className])} hidden={true}>

        </input>
    );
};

export default InputFile;
