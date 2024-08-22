import { Component, Input, OnInit } from '@angular/core';
import { CartItemsModel, GetAllProductsDto, ProductModel } from '../../../assets/Models/Products';
import { CartserviceService } from '../../cartservice.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService:CartserviceService){}

  @Input() product!:GetAllProductsDto

  ngOnInit(): void {
  }

  addtoCartItems(productModelItem:ProductModel){
    this.cartService.addToCart(productModelItem.id, 1, productModelItem.name, productModelItem.price,(productModelItem.productImg ?? ""))
    return;
  }
}
