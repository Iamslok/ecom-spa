import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { CartItemsModel } from '../../assets/Models/Products';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  itemCount: number = 0;
  searchTerm: string = '';
  filteredProducts: CartItemsModel[] = []
  products: CartItemsModel[] = []

  constructor(private CartService: CartserviceService) { }

  ngOnInit() {
    this.CartService.cartItems$.subscribe(items => {
      this.itemCount = items.length;
    });

    this.products = this.CartService.getCartItemsFromLocal()
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    if(term != "" && term != undefined && term != null){
      this.filteredProducts = this.products.filter(product => 
        product && product.PrductName && product.PrductName.toLowerCase().includes(term)
      );
    }else{
      this.filteredProducts = []
    }
    
  }
}


