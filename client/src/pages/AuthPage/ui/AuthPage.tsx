import {AuthForm} from "../../../features/auth";
import cls from './AuthPage.module.scss'


const AuthPage = () => {
    return (
        <div className={cls.AuthPage}>
                <AuthForm className={cls.AuthForm}/>
        </div>
    );
};

export default AuthPage;
