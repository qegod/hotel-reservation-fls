import cls from './HotelsPage.module.scss'
import {useSelector} from "react-redux";
import AppLink from "../../../shared/ui/AppLink/AppLink.tsx";
import HotelCard from "../../../entities/hotel/ui/HotelCard/HotelCard.tsx";
import {getHotels} from "../../../entities/hotel";
import {useAppDispatch} from "../../../app/providers/StoreProvider/store/store.ts";
import {useEffect} from "react";
import {fetchHotelsThunk} from "../../../features/fetchHotels";


const HotelsPage = () => {
    const hotels = useSelector(getHotels)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchHotelsThunk({page: 1, limit: 10}))
    }, [])


    return (
        <div>
            <div className={cls.hotelsCards}>
                {hotels && (
                    hotels.map(hotel => (
                        <AppLink to={'/hotels/' + hotel.id}>
                            <HotelCard
                                hotelName={hotel.name}
                                price={hotel.price}
                                image={`http://localhost:7000/${hotel?.images[0]?.filename || ''}`}

                            />
                        </AppLink>
                    ))
                )}
            </div>
        </div>
    );
};
export default HotelsPage;
