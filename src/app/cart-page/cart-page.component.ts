import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Route, Router } from '@angular/router';
import { cart, priceSummary } from '../data-type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart-page',
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
removeToCart(arg0: any) {
throw new Error('Method not implemented.');
}
  
  constructor(private product : ProductService, private route: Router){}
  
  ngOnInit(): void {
    this.loadDetails();
  }

  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  loadDetails() {
    debugger;
    this.product.currentCart().subscribe((result) => {
      debugger;
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if(item.quantity){
          price = price + (+ item.price * + item.quantity)
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price/10;
      this.priceSummary.tax = price/10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + (price/10) + 100 - (price/10);



    })
  }
  
}
