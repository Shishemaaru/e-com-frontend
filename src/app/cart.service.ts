import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems;

  constructor() {
    this.cartItems = JSON.parse(sessionStorage.getItem("cart"))
    if(!this.cartItems){
      this.cartItems = [];
    }
   }


additem(item){
  this.cartItems.push(item);
  this.savecart();

}

savecart(){
  sessionStorage.setItem("cart", JSON.stringify(this.cartItems))
}

removeitem(item){
  this.cartItems.slice(item);

}

emptycart(){
  this.cartItems= [];
  this.savecart();

}

getcartitems(){
  return this.cartItems;

}

}