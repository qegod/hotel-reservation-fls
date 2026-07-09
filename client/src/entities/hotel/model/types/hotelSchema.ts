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
    data: {
        description: string;
        title: string;
        image: string;
    }
    company_id: number
}

export class HotelSchema {
}
