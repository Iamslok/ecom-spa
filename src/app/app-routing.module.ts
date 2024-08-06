import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [
  {path:'cart-items',component:CartItemsComponent},
  {path:'product-detail/:productId',component:ProductDetailComponent},
  {path:'All-Products',component:AllproductsComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
