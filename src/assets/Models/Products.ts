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

export class GetAllProductsDto {
    productId: number = 0;
    productName: string = "";
    productDescription: string = "";
    productPrice: string = "";
    ProductImg: string = "";
    Rating: string = "";
}