import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideHttpClient } from '@angular/common/http';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SharedModule } from './shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { GalleriaModule } from 'primeng/galleria';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AllproductsComponent,
    ProductDetailComponent,
    CartItemsComponent,
    SigninComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GalleriaModule,
    FormsModule
  ],
  providers: [ provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
