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
  constructor (private activeRoute: ActivatedRoute, private product : ProductService){}
  ngOnInit(): void {
    debugger;
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((result) =>{
      debugger;
      this.productData = result;
    });
  }

  handleQuantity(val:string){
    if(this.productQuantity < 20 && val === 'plus'){
      this.productQuantity += 1;
    }
    else if(this.productQuantity > 1 && val === 'min'){
      this.productQuantity -= 1;
    }
  }
}
