import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import  Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  location;
  cuser;
  submitted = false;
  constructor(private formbuilder: FormBuilder, private authservice: AuthService, private userservice: UserService, private router: Router) { }

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
    this.userservice.getUserByUsername(formdata.username).subscribe( userobj =>{
      let logged_user = userobj;
      console.log(logged_user)
      if(logged_user){
        if(logged_user['password'] == formdata['password']){

          sessionStorage.setItem('user', JSON.stringify(logged_user));
          sessionStorage.setItem('admin', JSON.stringify(true));
          if(logged_user['admin']){
            this.router.navigate(['/admin'])
            return;
          }
          else{
             this.router.navigate(['/home'])
             return;
          }
        }else{
          Swal.fire({
            icon : 'error' ,
            title: 'Oops!',
            text: 'Your password is incorrect' ,
          })
        }
      }else{
        Swal.fire({
          icon : 'error' ,
          title: 'Oops!',
          text: 'Your password is incorrect' ,
        })
      }
    })
  }

    returnControls(name){
    return this.loginform.controls[name];
  }
  
}
