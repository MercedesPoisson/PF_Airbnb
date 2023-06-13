export interface Property {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string[],
    rating: number
}

export interface State {
    properties: Property[]
    allProperties: Property[]
}

export interface Action {
    type: string;
    payload: any;
}
