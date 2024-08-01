import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../assets/Models/Products';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent implements OnInit {
  productDetails : ProductModel[]=[]

  constructor(private service:ApiService){}

  ngOnInit() {
    this.service.getAllProducts().subscribe(res =>{
      this.productDetails = res
    })
  }
}
