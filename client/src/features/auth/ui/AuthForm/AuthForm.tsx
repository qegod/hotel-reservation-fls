import cls from './AuthForm.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import {memo, useCallback, useState} from "react";
import Input from "../../../../shared/ui/Input/Input.tsx";
import Button from "../../../../shared/ui/Button/Button.tsx";
import {getAuthData} from "../../model/selectors/getAuthData/getAuthData.ts";
import {useSelector} from "react-redux";
import {authActions} from "../../model/slice/authSlice/authSlice.ts";
import {useAppDispatch} from "../../../../app/providers/StoreProvider/store/store.ts";
import {loginUserThunk} from "../../model/service/loginThunk/loginThunk.ts";
import {useNavigate} from "react-router";
import Loader from "../../../../shared/ui/Loader/Loader.tsx";
import {registerUserThunk} from "../../model/service/registerThunk/registerThunk.ts";

interface AuthFormProps {
    className?: string
}

const AuthForm = memo((props: AuthFormProps) => {

    const {
        className
    } = props;

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false)
    const {username, password, email, isLoading, error} = useSelector(getAuthData)
    const dispatch = useAppDispatch()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authActions.setUsername(value))
    }, [dispatch])

    const onChangeEmail = useCallback((value: string) => {
        dispatch(authActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authActions.setPassword(value))
    }, [dispatch])

    const handleIsLogin = useCallback((e) => {
        e.preventDefault()
        setIsLogin((prev) => !prev);
    }, [setIsLogin]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (isLogin) {
            await dispatch(loginUserThunk({email, password})).unwrap();
            navigate('/')
        } else {
            await dispatch(registerUserThunk({email, password, username})).unwrap();
            navigate('/')
        }


    }, [dispatch, email, password, username, isLogin, navigate])

    if (isLoading) {
        return (
            <div className={classNames(cls.AuthForm, [className, cls.Loading])}>
                <Loader/>
            </div>
        )
    }


    return (
        <div className={classNames(cls.AuthForm, [className])}>
            <div className={cls.title}>
                {isLogin ?
                    (
                        <h2>sign in</h2>
                    ) :
                    (
                        <h2>sign up</h2>
                    )
                }
            </div>
            <form className={cls.formValues}>
                {!isLogin ? (
                    <label>
                        <h4>Username</h4>
                        <Input value={username} onChange={onChangeUsername}></Input>
                    </label>
                ) : null
                }
                <label>
                    <h4>Email</h4>
                    <Input value={email} onChange={onChangeEmail}></Input>
                </label>
                <label>
                    <h4>Password</h4>
                    <Input value={password} onChange={onChangePassword}></Input>
                </label>
                <div className={cls.buttons}>
                    <Button className={cls.changeButton}
                            onClick={handleIsLogin}>{isLogin ? 'Sing up' : 'Sing in'}</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
                {error && (
                    <p>{error}</p>
                )}
            </form>
        </div>
    );
});

export default AuthForm;
