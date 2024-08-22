import { Component, OnInit } from '@angular/core';
import { GetAllProductsDto, ProductModel } from '../../assets/Models/Products';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent implements OnInit {
  productDetails : GetAllProductsDto[]=[]

  constructor(private service:ApiService){}

  ngOnInit() {
    this.service.getProds().subscribe(res =>{
      this.productDetails = res
      
    })
  }
}
