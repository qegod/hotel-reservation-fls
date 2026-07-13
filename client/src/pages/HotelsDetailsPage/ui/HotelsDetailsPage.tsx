import cls from './HotelsDetailsPage.module.scss'
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {getCurrentHotel} from "../../../entities/hotel/model/selectors/getCurrentHotel/getCurrentHotel.ts";


const HotelsDetailsPage = () => {
    const {id} = useParams();
    const hotel = useSelector(getCurrentHotel(Number(id)))
    console.log(hotel)

    return (
        <div className={cls.HotelsDetailsPage}>
            <div className={cls.title}>
                <h2>{hotel.title}</h2>
            </div>
            <div className={cls.data}>
                <p className={cls.text}>{hotel.description}</p>
                <div>
                    <div className={cls.images}>
                        <img className={cls.image} src={`http://localhost:7000/${hotel.images[0].filename || ''}`} alt=""/>

                    </div>
                    <h3>name: {hotel.name}</h3>
                </div>
            </div>
        </div>
    );
};

export default HotelsDetailsPage;
