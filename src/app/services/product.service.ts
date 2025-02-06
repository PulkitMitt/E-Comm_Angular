import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  cartData = new EventEmitter<product[] | []>();
  constructor(private http: HttpClient) { }

  
  localAddToCart(data: product) {
    debugger;
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if( !localCart ){
      localStorage.setItem('localCart', JSON.stringify([data]));
      // this.cartData.emit();
    }
    else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }


  addProduct(data: product){
    return this.http.post("http://localhost:3000/products", data);
  }

  productList()
  {
    debugger;
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  deleteProduct(id:string)
  {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id:string){
    debugger;
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product: product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product);
  }

  popularProducts(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=4");
  }

  trendyProducts(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=7");
  }

  searchProducts(query: string){
    return this.http.get<product[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }

}
