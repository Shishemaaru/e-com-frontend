import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-ordermanager',
  templateUrl: './ordermanager.component.html',
  styleUrls: ['./ordermanager.component.css']
})
export class OrdermanagerComponent implements OnInit {

  orders;

  constructor(private orderservice: OrderService, private userservice: UserService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.orderservice.getAllOrders().subscribe( (orders)=> {
      this.orders = orders;
      console.log(orders);
      
    })
  }

  
}







