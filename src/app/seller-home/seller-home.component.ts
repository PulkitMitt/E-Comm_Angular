import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {

  icon = faTrash;
  iconEdit = faEdit;
  productList:undefined|product[]
  constructor(private product: ProductService){}
  productMessage : undefined| string

  ngOnInit(): void {
    this.getList();
  }

  deleteProduct (id:string){
    this.product.deleteProduct(id).subscribe((result) =>{
      if(result){
        this.productMessage = "Product has been deleted!";
        this.getList();
      }
    })
    setTimeout(()=>{
      this.productMessage = undefined;
    }, 3000);
  }

  getList(){
    this.product.productList().subscribe((result) => {
      this.productList = result;
    })
  }

}
