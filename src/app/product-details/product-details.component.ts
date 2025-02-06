import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  
  productData : undefined | product;
  productQuantity : number=1;
  removeCart = false;
  constructor (private activeRoute: ActivatedRoute, private product : ProductService){}
  ngOnInit(): void {
    debugger;
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((result) =>{
      debugger;
      this.productData = result;
    });

    let cartData = localStorage.getItem('localCart');
    if(productId && cartData){
      let items = JSON.parse(cartData);
      items = items.filter((items:product) => productId === items.id.toString());
      if(items.length){
        this.removeCart = true;
      }
      else{
        this.removeCart = false;
      }
    }
  }

  handleQuantity(val:string){
    if(this.productQuantity < 20 && val === 'plus'){
      this.productQuantity += 1;
    }
    else if(this.productQuantity > 1 && val === 'min'){
      this.productQuantity -= 1;
    }
  }

  addToCart(){
    debugger;
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.product.localAddToCart(this.productData);
      }
      else{
        let user = localStorage.getItem('user');
        
      }
    }
  }

  removeFromCart(productId:string){

  }

}
