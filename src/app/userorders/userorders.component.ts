import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit {
  user;
  orders;

  constructor(private orderservice: OrderService, private userservice: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getData();
  }


  getData(){
    this.orderservice.getByUser(this.user._id).subscribe( (orders)=> {
      this.orders = orders;
      console.log(orders);
      
    })
  }
}