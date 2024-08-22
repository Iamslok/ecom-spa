import { Component } from '@angular/core';
import { SignInDto } from '../../assets/Models/SignInModel';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  emailId:any;
  passwordVal:any

  constructor(private apiService:ApiService,private router:Router){}

  signIn(){
    var signInDto = new SignInDto();
    signInDto.UserEmailId = this.emailId;
    signInDto.UserPassword = this.passwordVal;

    this.apiService.signIn(signInDto).subscribe(res=>{
      if(res){
        localStorage.setItem('tokenVal',JSON.stringify(res))
        this.router.navigate(['/home'])
      }
    })
  }
}
