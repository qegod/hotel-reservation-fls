import cls from './CreateHotelForm.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import Button from "../../../../shared/ui/Button/Button.tsx";
import InputFile from "../../../../shared/ui/InputFile/InputFile.tsx";
import Input from "../../../../shared/ui/Input/Input.tsx";
import TextArea from "../../../../shared/ui/TextArea/TextArea.tsx";

interface CreateHotelForm {
    className?: string
    onChangeName?: (value: string) => void
    valueName?: string
    onChangeTitle?: (value: string) => void
    valueTitle?: string
    onChangeDescription?: (value: string) => void
    valueDescription?: string
    onChangeFiles?: (files: File[]) => void
    onSubmit?: () => void
    valuePrice?: number;
    onChangePrice?: (value: string) => void
    error?: string
}


export const CreateHotelForm = (props: CreateHotelForm) => {

    const {
        className,
        onChangeName,
        valueName,
        onChangeTitle,
        valueTitle,
        onChangeDescription,
        valueDescription,
        onChangeFiles,
        onSubmit,
        valuePrice,
        onChangePrice
    } = props

    return (
        <div className={classNames(cls.CreateHotelForm, [className])}>
            <div className={cls.inputs}>
                <div>
                    <h2>Name</h2>
                    <Input value={valueName} onChange={onChangeName}></Input>
                </div>
                <div>
                    <h3>Title</h3>
                    <Input value={valueTitle} onChange={onChangeTitle}></Input>
                </div>
                <div>
                    <h3>price</h3>
                    <Input value={valuePrice} onChange={onChangePrice}></Input>
                </div>
                <div>
                    <h3>Description</h3>
                    <TextArea value={valueDescription} onChange={onChangeDescription} className={cls.textArea}/>
                </div>
            </div>
            <div className={cls.inputFiles}>
                <InputFile onChange={onChangeFiles}></InputFile>
            </div>


            <Button onClick={onSubmit}>Submit</Button>
        </div>
    );
};

