import { Injectable } from '@angular/core';
import  jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getToken():string{
   var tokenval = JSON.parse(localStorage.getItem('tokenVal') ?? "");
    return tokenval.token
  }

  isAuthticated():boolean {
    return this.isTokenExpired(this.getToken()) === false;
  }

  isTokenExpired(token:string):boolean{
    try{
      const date = this.getTokenExpirationDate(token);
      if(date == undefined || date == null) return true;
      return !(date.valueOf() > new Date().valueOf())
    }
    catch{
      return true;
    }
  }

  //decode jwt
  getTokenExpirationDate(token:string): Date | null{
    try{
      const decode : any = jwt_decode(token)
      if(decode.exp === undefined || decode.exp === null) return null;
      const date = new Date(0);
      date.setUTCSeconds(decode.exp);
      return date;
    }
    catch{
      return null;
    }
  }
}
