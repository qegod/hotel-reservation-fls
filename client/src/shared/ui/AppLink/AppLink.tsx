import {Link} from "react-router";
import {classNames} from "../../lib/classNames/classNames.ts";
import cls from './AppLink.module.scss'

interface AppLinkProps {
    to: string;
    children?: React.ReactNode;
}

const AppLink = ({to, children}: AppLinkProps) => {
    return (
        <Link className={classNames(cls.AppLink)} to={to}>{children}</Link>
    );
};

export default AppLink;
