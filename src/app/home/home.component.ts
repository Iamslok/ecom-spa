import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GetAllProductsDto, ProductModel } from '../../assets/Models/Products';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  productDetails: GetAllProductsDto[]=[];
  
  constructor(private service:ApiService){}

  ngOnInit() {
    this.service.getProds().subscribe(res =>{
      this.productDetails = res
    })
  }
}
