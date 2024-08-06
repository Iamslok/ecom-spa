import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ProductModel } from '../../assets/Models/Products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productId:number = 0
  productDetails:ProductModel | undefined

  constructor(private router:ActivatedRoute, private apiService:ApiService){}

  ngOnInit(): void {
    this.router.params.subscribe((param:any)=>{
      this.productId = +param.productId

      this.apiService.getAllProducts().subscribe(res=>{
        if(res.length > 0){
          this.productDetails = res.find(x=>x.id === this.productId)
          console.log(this.productDetails)
        }
      })
    })
  }
}
