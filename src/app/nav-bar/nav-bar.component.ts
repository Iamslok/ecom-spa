import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { CartItemsModel, ProductModel } from '../../assets/Models/Products';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  itemCount: number = 0;
  searchTerm: string = '';
  filteredProducts: ProductModel[] = []
  products: ProductModel[] = []

  constructor(private CartService: CartserviceService, private apiService:ApiService) { }

  ngOnInit() {
    this.CartService.cartItems$.subscribe(items => {
      this.itemCount = items.length;
    });

    this.apiService.getAllProducts().subscribe(res=>{
      this.products = res;
    })
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    if(term != "" && term != undefined && term != null){
      this.filteredProducts = this.products.filter(product => 
        product && product.name && product.name.toLowerCase().includes(term)
      );
    }else{
      this.filteredProducts = []
    }
    
  }
}


