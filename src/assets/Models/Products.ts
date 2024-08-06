export interface ProductModel {
    id: number;
    name: string;
    price: number;
    description: string;
    rating?: number;
    productImg?:string
}

export class CartItemsModel {
    cartId?:number;
    ProductId?:number; 
    PrductName?:string;
    ProductPrice?:number;
    Quantity?:number;
    ProductImg?:string;
}