import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
// import {}
@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  menuType:string = 'default';
  sellerName:string='';
  searchResult:undefined | product[];
  username : string = "";
  cartItems=0;
  constructor(private route: Router, private product: ProductService){}
  ngOnInit(): void {
    this.route.events.subscribe((val:any) => {
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller'))
        {
          this.menuType='seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        }
        else if (localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.username = userData.name;
          this.menuType = 'user';
        }
        else{
          this.menuType='default';
        }
      }
    });
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length;
    }
    this.product.cartData.subscribe((items) => {
      this.cartItems = items.length;
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  UserLogOut(){
    localStorage.removeItem('user');
    this.route.navigate(['user-auth']);
  }
  searchProducts(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      
      this.product.searchProducts(element.value).subscribe((result) => {
        this.searchResult = result;
        console.log(this.searchResult);
      })
    }
  }

  hideSearch(){
    this.searchResult=undefined;
  }

  submitSearch(val:string){
    debugger;
    this.route.navigate([`search/${val}`]);
  }
  redirectToDetails(id:string){
    debugger;
    this.route.navigate([`details/${id}`]);
  }
}
