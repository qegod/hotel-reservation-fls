import {getHotels} from "../getHotels/getHotels.ts";
import {useSelector} from "react-redux";


export const getCurrentHotel = (id: number) => () => {
    const hotels = useSelector(getHotels);

    return hotels.find((hotel) => hotel.id === id) || null;
}
