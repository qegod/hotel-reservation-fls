import cls from './HotelCard.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";

interface HotelCardProps {
    className?: string
    hotelName?: string
    price?: number
    image?: string
}

const HotelCard = (props: HotelCardProps) => {
    const {
        className,
        hotelName,
        price,
        image,
    } = props


    return (
        <div className={classNames(cls.HotelCard, [className])}>
            <img className={cls.image} src={image} alt="none"/>
            <h5>{hotelName}</h5>
            <h2>price: {price}</h2>
        </div>
    );
};

export default HotelCard;
