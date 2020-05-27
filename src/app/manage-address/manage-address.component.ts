import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {
  user;
  addressform;
  submitted=false;
  
  constructor(private formBuilder : FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.initForm();
  }

  initForm(){
    this.addressform= this.formBuilder.group({
      house : '',
      landmark : '',
      city : '',
      state : '',
      country : ''
    })
  }

  userSubmit(formdata){
    this.submitted=true;
    console.log(this.addressform.controls);
    if(!this.addressform.valid){
      return;
    }

    this.user.address.push(formdata);
    this.userservice.updateUser(this.user._id, {address : this.user.address}).subscribe(data => {
      console.log(data);

    })
  }


  returnControls(){
    return this.addressform.controls;
  }

}
