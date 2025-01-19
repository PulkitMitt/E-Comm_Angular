import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-seller-auth',
    imports: [FormsModule, CommonModule],
    templateUrl: './seller-auth.component.html',
    styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  showLogin = false;
  authError = "";
  constructor(private seller: SellerService, private router:Router)
  {}

  ngOnInit():void{
    debugger;
    this.seller.reloadSeller();

  }
  signUp(data:SignUp):void{
    debugger;
    this.seller.userSignUp(data)
    this.showLogin = false;
  }

  login(data:Login):void{
    this.authError = "";
    console.log(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if(isError){
        this.authError = "User Email or Password is incorrect!";
      }
    })
  }

  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }
}
