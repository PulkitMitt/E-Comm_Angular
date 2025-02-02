import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  popularProducts:undefined | product[];
  trendyProducts:undefined | product[];
  constructor(private product: ProductService){}

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts = data;
      console.log(this.popularProducts);
    })
    this.product.trendyProducts().subscribe((data) =>{
      this.trendyProducts = data;
    })  
  }



}
