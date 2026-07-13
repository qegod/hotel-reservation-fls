import cls from './mainPage.module.scss'
import AppLink from "@/shared/ui/AppLink/AppLink.tsx";

const MainPage = () => {


    return (
        <div className={cls.MainPage}>
            <div className={cls.text}>
                <h2>Select you're hotel</h2>
                <p>start now and select</p>
            </div>
            <div className={cls.cards}>
                <AppLink to={'/hotels'}>
                    <div className={cls.card}>
                        <h3>Hotels</h3>
                    </div>
                </AppLink>
            </div>

        </div>
    );
};

export default MainPage;
