import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { order } from '../data-type';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  imports: [CommonModule],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit{
  
  orderData:order[] | undefined;

  constructor(private product : ProductService, private router : Router){}
  
  ngOnInit(): void {
    this.getOrderList();
  }

  getOrderList() {
    this.product.orderList().subscribe((result) => {
      this.orderData = result;

    })
  }

  cancelOrders(orderId : number | undefined){
    if (orderId){
      this.product.cancelOrders(orderId).subscribe((result)=>{
        if(result){
          this.getOrderList();
        }

      })
    }
  }

}
