import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  
  searchResult:undefined | product[];
  searchKey: null | string='';
  constructor(private activeRoute: ActivatedRoute, private product: ProductService){}
  ngOnInit(): void {
    
    let query = this.activeRoute.snapshot.paramMap.get('query');
    this.searchKey = query;
    query && this.product.searchProducts(query).subscribe((result) => {
      this.searchResult = result;
    })
  }



}
