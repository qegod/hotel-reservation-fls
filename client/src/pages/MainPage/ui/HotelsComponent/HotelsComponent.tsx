import cls from './HotelsComponent.module.scss'
import {useSelector} from "react-redux";
import {getHotels} from "../../../../entities/hotel";
import HotelCard from "../../../../entities/hotel/ui/HotelCard/HotelCard.tsx";
import AppLink from "../../../../shared/ui/AppLink/AppLink.tsx";

const HotelsComponent = () => {
    const hotels = useSelector(getHotels)


    return (
        <div>
            <div className={cls.hotelsCards}>
                {hotels && (
                    hotels.map(hotel => (
                        <AppLink to={'/hotels/' + hotel.id}>
                            <HotelCard hotelName={hotel.name} price={hotel.price} />
                        </AppLink>
                    ))
                )}
            </div>

        </div>
    );
};

export default HotelsComponent;
