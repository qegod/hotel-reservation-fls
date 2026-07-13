import cls from './CreateHotelPage.module.scss'
import {useCallback, useState} from "react";
import {useAppDispatch} from "../../../app/providers/StoreProvider/store/store.ts";
import {
    createHotelActions, createHotelThunk,
    getCreateHotelDescription,
    getCreateHotelError,
    getCreateHotelLoading,
    getCreateHotelName,
    getCreateHotelPrice,
    getCreateHotelTitle
} from "../../../features/createHotels";
import {useSelector} from "react-redux";
import {CreateHotelForm} from "./createHotelForm/CreateHotelForm.tsx";
import Loader from "../../../shared/ui/Loader/Loader.tsx";
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {useNavigate} from "react-router";

const CreateHotelPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const valueName = useSelector(getCreateHotelName)
    const valueDescription = useSelector(getCreateHotelDescription)
    const valueTitle = useSelector(getCreateHotelTitle)
    const isLoading = useSelector(getCreateHotelLoading)
    const error = useSelector(getCreateHotelError)
    const valuePrice = useSelector(getCreateHotelPrice)

    const [files, setFiles] = useState<File[]>([])

    const onChangeFiles = useCallback((files: File[]) => {
        setFiles(files);
    }, [])
    const onChangeName = useCallback((value: string) => {
        dispatch(createHotelActions.setName(value))
    }, [dispatch])

    const onChangeTitle = useCallback((value: string) => {
        dispatch(createHotelActions.setTitle(value))
    }, [dispatch])

    const onChangeDescription = useCallback((value: string) => {
        dispatch(createHotelActions.setDescription(value))
    }, [dispatch])

    const onChangePrice = useCallback((value: string) => {
        dispatch(createHotelActions.setPrice(Number(value)))
    }, [dispatch])

    const  onSubmit = useCallback( async () => {
        await dispatch(createHotelThunk({
            name: valueName,
            description: valueDescription,
            images: files,
            title: valueTitle,
            price: valuePrice
        })).unwrap()
        navigate('/hotels')
    }, [
        dispatch,
        valueName,
        valueDescription,
        valueTitle,
        valuePrice,
        files,
    ]);

    if(isLoading) {
        return (
            <div className={classNames(cls.CreateHotelPage, [cls.loading])}>
                <Loader />
            </div>
        )
    }


    return (
        <div className={cls.CreateHotelPage}>


            <CreateHotelForm
                valueName={valueName}
                valueDescription={valueDescription}
                valueTitle={valueTitle}
                onChangeFiles={onChangeFiles}
                onChangeName={onChangeName}
                onChangeTitle={onChangeTitle}
                onChangeDescription={onChangeDescription}
                valuePrice={valuePrice}
                onChangePrice={onChangePrice}
                error={error}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default CreateHotelPage;
