import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  submitted = false;
  constructor(private formbuilder: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginform = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  loginsubmit(formdata){
    this.submitted = true;
    this.authservice.login(formdata);
    console.log(formdata)
  }

  returnControls(name){
    return this.loginform.controls[name];
  }

}
