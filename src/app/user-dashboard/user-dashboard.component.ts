import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user;
  userform;
  showuserdetails=true;
  showorders=false;
  showmanageaddress=false;
  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    document.body.classList.add('user-dash');
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.initForm(this.user);
    this.updateuser();
  }

  initForm(user){
    this.userform = this.fb.group(user);
  }

  toggleuserdetails(){
    this.showuserdetails=true;
    this.showorders=false;
    this.showmanageaddress=false;
  }

  userSubmit(formdata){
    console.log(formdata);
  }
 
  returnControls(){
  return this.userform.controls;
}

  toggleManageAddress(){
    this.showmanageaddress=true;
    this.showuserdetails=false;
    this.showorders=false;
    
  }

  toggleManageOrders(){
    this.showorders=true;
    this.showmanageaddress=false;
    this.showuserdetails=false;
  }

  updateuser(){
    this.userservice.getUserById(this.user._id).subscribe(data =>{
      sessionStorage.setItem("user", JSON.stringify(data));
      this.user=data;

    }
    )
  }

}
