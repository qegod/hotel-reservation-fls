import cls from './mainPage.module.scss'
import seeHotels from '../../../shared/assets/image/firtBg.jpg'

const MainPage = () => {


    return (
        <div className={cls.MainPage}>
            <div className={cls.text}>
                <h2>Select you're hotel</h2>

                <p>start now and select</p>
            </div>

            <div className={cls.cards}>
                <div className={cls.card}>
                    <h3>See hotels</h3>
                </div>
                <div className={cls.card}>

                </div>

            </div>

        </div>
    );
};

export default MainPage;
