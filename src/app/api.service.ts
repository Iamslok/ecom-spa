import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllProductsDto, ProductModel } from '../assets/Models/Products';
import { HttpClient } from '@angular/common/http';
import { SignInDto, TokenModel } from '../assets/Models/SignInModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonPath = "/assets/products.json";
  apiUrl = "https://localhost:7037/api/"

  constructor(private httpClient:HttpClient) { }

  getAllProducts() :Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.jsonPath);
  }

  getProds():Observable<any>{
    return this.httpClient.get<any>(this.apiUrl + "Products/GetAllProducts")
  }

  getProductById(productId:number):Observable<GetAllProductsDto>{
    return this.httpClient.get<any>(this.apiUrl + "Products/GetProductById?productId=" + productId )
  }

  signIn(SignInDto:SignInDto):Observable<any>{
    const header = {'content-type':'application/json'}
    const body = JSON.stringify(SignInDto);
    return this.httpClient.post(this.apiUrl +'user/SignIn',body,{'headers':header})
  }
}
