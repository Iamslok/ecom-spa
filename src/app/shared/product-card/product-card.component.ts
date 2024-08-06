import { Component, Input } from '@angular/core';
import { CartItemsModel, ProductModel } from '../../../assets/Models/Products';
import { CartserviceService } from '../../cartservice.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  constructor(private cartService:CartserviceService){}

  @Input() product!:ProductModel

  addtoCartItems(productModelItem:ProductModel){
    this.cartService.addToCart(productModelItem.id, 1, productModelItem.name, productModelItem.price,(productModelItem.productImg ?? ""))
  }
}
