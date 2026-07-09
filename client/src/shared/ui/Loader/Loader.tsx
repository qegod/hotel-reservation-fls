import {classNames} from "../../lib/classNames/classNames.ts";
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames(cls.Loader, [className])}>
        </div>
    );
};

export default Loader;
