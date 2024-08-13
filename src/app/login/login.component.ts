import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  emailId:string = ""
  passwordVal:string = ""

  constructor(private route: Router){}

  ngOnInit(): void {
    
  }

  login(){
   var email = "Demo@gmail.com"
   var password = "Test@123"

   if(this.emailId == "" || this.emailId == null || this.emailId == undefined){
    alert("Emaild Id is Requried!");
    return;
   }
   if(this.passwordVal == "" || this.passwordVal == null || this.passwordVal == undefined){
    alert("Password is Requried!");
    return;
   }

   if(this.emailId != email || this.passwordVal != password){
    alert("Emailid Or Password Incorrect");
    return;
   }

   if(this.emailId === email && this.passwordVal === password){
    this.route.navigateByUrl('/home')
   }
  }
}
