import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { cart, order } from '../data-type';


@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{

  totalPrice : number | undefined;
  cartData : cart[] | undefined;

  constructor(private product: ProductService, private router: Router){}

  ngOnInit(): void {
    this.product.currentCart().subscribe((result)=>{
      let price = 0;
      this.cartData = result;
      result.forEach((item) => {
        if(item.quantity){
          price = price + (+ item.price * + item.quantity);
        }
      })
      this.totalPrice = price + (price/10) + 100 - (price/10);
    })
  }

  orderNow(data: {email: string, address: string, contact: string}) {
    debugger;
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if(this.totalPrice){
      let orderData : order = {
        ...data,
        totalPrice: this.totalPrice,
        userId
      }

      this.product.orderNow(orderData).subscribe((result) => {
        if(result){
          console.log(result);
        }
      })
    }

  }

}
