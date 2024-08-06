import { Injectable } from '@angular/core';
import { CartItemsModel } from '../assets/Models/Products';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cartitems: CartItemsModel[] = []
  Getcartitems: CartItemsModel[] = []
  constructor() { }

  addToCart(productId: number, quantity: number, productName: string, price: number, imgUrl: string) {
    if (this.cartitems.filter(x => x.ProductId == productId).length == 0) {
      var item = new CartItemsModel;
      item.PrductName = productName;
      item.cartId = productId;
      item.ProductId = productId;
      item.ProductPrice = price;
      item.ProductImg = imgUrl;
      item.Quantity = 1

      this.cartitems.push(item)
      localStorage.setItem('cartItemsSet', JSON.stringify(this.cartitems))
    } else {
      var existItem = this.cartitems.filter(x => x.ProductId == productId)[0];
      existItem.Quantity = (existItem.Quantity ?? 0) + quantity

      localStorage.removeItem('cartItemsSet')
      localStorage.setItem('cartItemsSet', JSON.stringify(this.cartitems))
    }
  }

  getCartItemsFromLocal(): any {
    var res = localStorage.getItem('cartItemsSet');
    if (res) {
       return this.Getcartitems = JSON.parse(res)
    }
  }
}
