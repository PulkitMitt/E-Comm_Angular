import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  imports: [FormsModule],
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent implements OnInit{
  productData : undefined | product;
  productMessage : undefined | string
  constructor( private route: ActivatedRoute, private product : ProductService) {}
  
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe((result)=> {
      this.productData = result;
    });
  }
  submit(data:product){
    if(this.productData){
      data.id = this.productData?.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if(result){
        this.productMessage="Product has been Updated!";
      }
    })
    setTimeout(()=>{
      this.productMessage = undefined;
    }, 3000)
    
  }


}
