export interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    title:string;
    rating:{
        rate:number;
        count:number;
    }
    price: number
}

export interface SingleProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    title:string;
    price: number
}