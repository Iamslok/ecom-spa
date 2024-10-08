import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { GetAllProductsDto, ProductModel } from '../../assets/Models/Products';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productId: number = 0
  productDetails: ProductModel | undefined
  GetProductDeatils!: GetAllProductsDto;

  constructor(private router: ActivatedRoute, private apiService: ApiService, private cartService: CartserviceService) { }

  ngOnInit(): void {
    this.router.params.subscribe((param: any) => {
      this.productId = +param.productId

      this.apiService.getAllProducts().subscribe(res => {
        if (res.length > 0) {
          this.productDetails = res.find(x => x.id === this.productId)
        }
      })

      this.apiService.getProductById(this.productId).subscribe(res=>{
        this.GetProductDeatils = res;
        console.log(this.GetProductDeatils)
      })
    })
  }

  addtoCartItems(productModelItem?: ProductModel) {
    if (productModelItem)
      this.cartService.addToCart(productModelItem.id, 1, productModelItem.name, productModelItem.price, (productModelItem.productImg ?? ""))
      return;
  }
}
