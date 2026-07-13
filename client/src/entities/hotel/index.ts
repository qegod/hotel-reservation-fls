export {
    type HotelSchema
} from './model/types/hotelSchema'

export {
    hotelReducer,
    hotelActions
} from './model/slice/hotelSlice'

export {
    getHotels
} from './model/selectors/getHotels/getHotels'

export {
    getTotalPages
} from './model/selectors/getTotalPages/getTotalPages'

export {
    getCurrentHotel
} from './model/selectors/getCurrentHotel/getCurrentHotel'
