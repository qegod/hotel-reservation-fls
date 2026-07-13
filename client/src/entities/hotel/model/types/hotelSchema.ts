export interface HotelSchema {
    hotels?: Hotel[]
    isLoading: boolean
    error?: string
    page: number
    limit: number
    totalPages?: number
}

export interface Hotel {
    id: number
    name: string
    price: number
    description: string;
    title: string;
    company_id: number
    images?: imagesHotel[]
}

interface imagesHotel {
    filename: string;
    id: number
    hotel_id: number
}

export class HotelSchema {
}
