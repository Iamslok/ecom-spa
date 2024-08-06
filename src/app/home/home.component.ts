import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductModel } from '../../assets/Models/Products';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  productDetails : ProductModel[]=[]
  
  constructor(private service:ApiService){}

  ngOnInit() {
    this.service.getAllProducts().subscribe(res =>{
      this.productDetails = res
    })
  }

}
