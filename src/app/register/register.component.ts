import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userform;
  submitted=false;
  hide=true;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  

  ngOnInit() {
    document.body.classList.add('bg-rg')
    this.userform= this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      username : ["", Validators.required],
      password : ["", [Validators.required, Validators.minLength(5)]],
      confirm : [""],
      email : ["", Validators.required],
      contact : [null, [Validators.required, Validators.minLength(10)]],
      age : [null, Validators.required],
      created : new Date,
    },{ validator : this.matchPassword('password', 'confirm')}
    )
  
  }
  matchPassword(password, confirm_pass){
    return (userform) =>{
      let passControl = userform.controls[password];
      let confirmControl = userform.controls[confirm_pass];

      if(passControl.value !== confirmControl.value){
        confirmControl.setErrors({match: true})
      }else{
        confirmControl.setErrors(null)
      }
    }
    //return false
  }
  userSubmit(formdata){
    this.submitted=true;
    console.log(this.userform.controls);
    if(!this.userform.valid){
      //alert("Invalid form")
      return;
    }
    
    this.userService.addUser(formdata).subscribe(response=> {
      console.log(response);
      this.router.navigate(['/home'])   
     });

  }
  returnControls(){
    return this.userform.controls;
  }

  ngOnDestroy(){
    document.body.classList.remove('bg-rg')
  }

}
