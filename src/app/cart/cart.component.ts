import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {faPlus , faMinus, faShoppingBag, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  plus= faPlus;
  minus= faMinus;
  trash=faTrash;
  bag= faShoppingBag;
  user;

  sum=0;

  constructor( public cartservice: CartService, private router: Router) { }

  ngOnInit(): void {
    // document.body.classList.add('bg-r');
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.calculateTotal();
    this.variables();
  }

 

  variables(){
    var obj = [
      " SMARTPHONES.",
      " APPLIANCES.",
      " ACCESSORIES."
    ]
    
    let count = 0;
    
    var title = document.querySelector('#the');

    title.addEventListener('animationstart', type, false);
title.addEventListener('animationiteration', type, false);


function type(ev) {
  if(ev.animationName !== 'typing') return;
  this.style.animationTimingFunction = `steps(${obj[count].length})`;
  this.innerHTML = obj[count];
  
  count++;
  if (count === obj.length) count = 0;
}

  }

  clearcart(){
    this.cartservice.emptycart()
    this.sum=0;
  }
  checkout(){
    let order ={cart: this.cartservice.cartItems , amount: this.sum,user: this.user._id,created: new Date()};
    sessionStorage.setItem('order',JSON.stringify(order));
    this.router.navigate(['/payment']);
  }

  addquantity(index){
    this.cartservice.cartItems[index].quantity++
    this.calculateTotal();
    this.cartservice.savecart();


  }
  calculateTotal(){
    this.sum = 0;
    for(let item of this.cartservice.cartItems){
       this.sum+= item.data.prodprice*item.quantity;

    }
  }

  removequantity(index){
    let cartItems=this.cartservice.cartItems
    if(cartItems[index].quantity>1){
      cartItems[index].quantity--
    }
    else{
      cartItems.splice(index, 1);
      console.log(cartItems);
        }
    this.cartservice.cartItems=cartItems;
    this.calculateTotal();
    console.log(this.cartservice.cartItems);
    this.cartservice.savecart();
   
     
    }

    continue(){
      this.router.navigate(['/home'])
    }

  }

