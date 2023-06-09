export interface BedsType {
    name: string    
    amount: number
    room: number
}

export interface Property {
    id_property: number
    title: string
    province: string
    location: string
    address: string
    property_type: 'House' | 'Apartment' | 'Room'
    description: string
    price_per_night: number
    images: string[]
    rating: number
    ratings_amount: number
    availability: Date[]
    is_active: boolean
    rooms_number: number
    bathrooms_number?: number
    beds_number: number
    beds_type?: BedsType[]
    max_guests: number
    allow_pets: boolean
    weekly_discount: boolean
    monthly_discount: boolean
    min_nights: number
}
export interface Service {
    id: number,
    name: string,
    icon: string
}

interface Province {
    nombre: string
}

export interface State {
    services: Service[],
    properties: Property[],
    detail: Partial<Property>
    pages: number
    provinces: Province[]
    user: Partial<UserAttributes>
    favorites: Property[]
}

interface UserAttributes {
    id_user: string
    name?: string
    surname?: string
    email: string
    address?: string
    number?: number
    date?: Date
    gender?: 'Male' | 'Female' | 'Other'
    image?: string
    user_type: 'User' | 'Owner' | 'Admin'
    is_active: boolean
}



export interface Action {
    type: string;
    payload: any;
}
