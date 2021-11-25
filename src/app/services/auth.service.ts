import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from "../models/user";
import Cookies from "js-cookie";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }


  signup(user: User)  {
    const url = "http://localhost:3001/auth/signup";
    return this.http.post(url,user)
  }

  signin(user: User) {
    const url = "http://localhost:3001/auth/signin";
    return this.http.post<Array<String>>(url,user)
  }

  isAuth(){
   if (Cookies.get("isAuth")=='true') return true;
   return false;
  }

  SignOut() {
    Cookies.remove("isAuth")
    Cookies.remove("email")
  }

}
