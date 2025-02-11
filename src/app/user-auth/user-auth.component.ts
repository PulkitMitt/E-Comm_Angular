import { Component, OnInit } from '@angular/core';
import { cart, Login, product, SignUp } from '../data-type';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent implements OnInit {

  authError:string="";
  showLogin:boolean=true;
  constructor(private user: UserService, private product: ProductService){}

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: SignUp) {
    this.user.UserSignUp(data);
  }

  openSignUp(){
    this.showLogin = false;
  }
  openLogin(){
    this.showLogin = true;
  }

  login(data:Login){
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result) =>{
      if(result){
        this.authError = "User Not Found";
      }else {
        this.localcartToRemoteCart();
      }
      
    })
  }

  localcartToRemoteCart(){
    debugger;
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if(data){
      let cartDataList : product[] = JSON.parse(data);
      cartDataList.forEach((product:product, index) => {
        let cartData: cart = {
          ...product,
          productId : product.id,
          userId 
        }
        delete cartData.id;

        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result) => {
            if(result){
              alert('products are added!!');
            }
          })
        }, 500)

       
        if(cartDataList.length === index + 1){
          localStorage.removeItem('localCart');
        }
      })
    

    }

    setTimeout(() => {
      this.product.getCartList(userId);
    }, 2000)
  }



}
