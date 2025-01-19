import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  standalone:true,
  imports: [ FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit{
  
  addproductMessage:string|undefined;
  constructor(private product: ProductService){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit(data:product)
  {
    console.log(data);
    this.product.addProduct(data).subscribe((result)=>{
   
      if(result){
        this.addproductMessage="Product added Susscessfully!!";
      }
      setTimeout(() => (this.addproductMessage = undefined), 3000);

    })
  }
}
