import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css']
}) 
export class ManagerUserComponent implements OnInit {

  editForm;
  userForm;
  users;
  currentUser: any;
  showEditForm = false;
  showAddForm = false;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      name : '',
      username: '',
      password: '',
      email: '',
      contact: '',
    })
    this.getData();
  }

  getData(){
    this.userService.getAllUsers().subscribe( (users)=> {
      this.users = users;
      this.initForm(users);
    })
  }

  initForm(data){
    this.editForm = this.formBuilder.group(data);
    console.log(this.editForm.value);
  }




  closeForm(){
    this.showEditForm = false;
  }

  onUpdateSubmit(formdata){
    console.log(formdata.value)
    this.userService.updateUser(formdata.value, formdata.value._id).subscribe(message => console.log(message));
    this.closeForm();
  }

  delete(id){
    this.userService.delete(id).subscribe((response)=>{
      console.log(response);
      this.getData();
    })
  }

  editData(user){
    this.initForm(user);
    this.showEditForm = true;
  }

  onSubmit(formdata){
    console.log(formdata);
  }

}
