import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { CartItemsModel } from '../../assets/Models/Products';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent implements OnInit {

  Getcartitems: CartItemsModel[] = []

  constructor(private cartService:CartserviceService){}

  ngOnInit(): void {
   this.Getcartitems =  this.cartService.getCartItemsFromLocal()
  }
}
