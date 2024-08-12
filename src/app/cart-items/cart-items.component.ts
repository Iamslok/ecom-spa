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
  total = 0

  constructor(private cartService:CartserviceService){}

  ngOnInit(): void {
   this.Getcartitems =  this.cartService.getCartItemsFromLocal()

   if(this.Getcartitems.length > 0){
    this.Getcartitems.forEach(item=>{
      this.total += (item.ProductPrice ?? 0)
    })
   }
  }
}
