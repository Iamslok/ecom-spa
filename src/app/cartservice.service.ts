import { Injectable } from '@angular/core';
import { CartItemsModel } from '../assets/Models/Products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cartitemsModal: CartItemsModel[] = []
  Getcartitems: CartItemsModel[] = []
  private cartItems = new BehaviorSubject<any[]>(this.getCartItemsFromLocalStorage());
  cartItems$ = this.cartItems.asObservable();
  constructor() {
    const itemsFromLocalStorage = this.getCartItemsFromLocalStorage();
    this.cartItems = new BehaviorSubject<any[]>(itemsFromLocalStorage);
    this.cartItems$ = this.cartItems.asObservable();
}

   addToCart(productId: number, quantity: number, productName: string, price: number, imgUrl: string) {
    const currentItems = this.cartItems.value;
    let existingItem = currentItems.find(x => x.ProductId === productId);

    if (!existingItem) {
        // If item doesn't exist, add new one
        let newItem = new CartItemsModel();
        newItem.PrductName = productName;
        newItem.cartId = productId;
        newItem.ProductId = productId;
        newItem.ProductPrice = price;
        newItem.ProductImg = imgUrl;
        newItem.Quantity = quantity;

        currentItems.push(newItem);
    } else {
        // If item exists, update quantity and price
        existingItem.Quantity += quantity;
        existingItem.ProductPrice = price * existingItem.Quantity;
    }

    // Save to local storage and update BehaviorSubject
    localStorage.setItem('cartItemsSet', JSON.stringify(currentItems));
    this.cartItems.next(currentItems);
}

getCartItemsFromLocal(): CartItemsModel[] {
  const res = localStorage.getItem('cartItemsSet');
  if (res) {
      this.Getcartitems = JSON.parse(res);
  } else {
      this.Getcartitems = [];
  }
  return this.Getcartitems;
}

  getCartItemCount(): number {
    return this.cartItems.value.length;
}

  getCartItemsFromLocalStorage(): any[] {
    return JSON.parse(localStorage.getItem('cartItemsSet') || '[]');
  }
}
