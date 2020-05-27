import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
//   admin;
//   users;
//   orders;
//   adminform;
//   showstats=false;
//   showorders=false;
//   showmanageuser=false;

//   constructor(private fb: FormBuilder, private userservice: UserService,private orderservice: OrderService) { }

//   ngOnInit(): void {
//     document.body.classList.add('admin-dash');
//     this.admin = JSON.parse(sessionStorage.getItem('user'));
//     this.getData();
//     this.getData2();

//   }

//   toggleManageUser(){
//     this.hideAll();
//     this.showmanageuser=true;
//   }

//   toggleShowOrder(){
//     this.hideAll();
//     this.showorders=true;

//   }

//   toggleShowStats(){
//     this.hideAll();
//     this.showstats=true;
//   }

//   hideAll(){
//     this.showorders=false;
//     this.showmanageuser=false;
//     this.showstats=false;

//   }

//   getData(){
//     this.userservice.getAllUsers().subscribe( (users)=> {
//       this.users = users;
//       console.log(users);
//     })
//   }
//   getData2(){
//     this.orderservice.getAllOrders().subscribe( (orders)=>{
//       this.orders = orders;
//       console.log(orders);
//     })
//   }



admin;
users;
orders;
showorders=false;
showmanageuser = false;
showstats = true;

  constructor(private fb: FormBuilder, private userservice: UserService,private orderservice: OrderService) { }

  ngOnInit(): void {
    this.admin = JSON.parse(sessionStorage.getItem("user"));
    this.getData();
    this.getData2();

  }

  hideall(){
    this.showmanageuser = false;
    this.showstats = false;
    this,this.showorders=false;
  }

  toggleManageUser(){
    this.hideall();
    this.showmanageuser = true;
  }

  toggleShowOrder(){
    this.hideall();
    this.showorders=true;
  }

  toggleShowStats(){
    this.hideall();
    this.showstats = true;
  }

  getData(){
        this.userservice.getAllUsers().subscribe( (users)=> {
          this.users = users;
          console.log(users);
        })
      }
      getData2(){
        this.orderservice.getAllOrders().subscribe( (orders)=>{
          this.orders = orders;
          console.log(orders);
        })
      }
}





