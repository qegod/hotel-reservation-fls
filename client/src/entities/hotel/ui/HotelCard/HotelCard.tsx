import cls from './HotelCard.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";

interface HotelCardProps {
    className?: string
    hotelName?: string
    price?: number
}

const HotelCard = (props: HotelCardProps) => {
    const {
        className,
        hotelName,
        price,
    } = props


    return (
        <div className={classNames(cls.HotelCard, [className])}>
            <h5>{hotelName}</h5>
            <h2>{price}</h2>
        </div>
    );
};

export default HotelCard;
