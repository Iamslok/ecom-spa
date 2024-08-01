import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../assets/Models/Products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonPath = "/assets/products.json";

  constructor(private httpClient:HttpClient) { }

  getAllProducts() :Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.jsonPath);
  }
}
