import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedin=false;
  url= "http://localhost:3000/user"
  
  constructor(private http: HttpClient, private router: Router) { 
    if(sessionStorage.getItem('user')){
      this.loggedin=true;
    }
  }

  changePassword(id,password){
    return this.http.put(this.url+`/changepassword/${id}`, {password : password})
  }
  
  addUser(formdata){
    let message = this.http.post(this.url+'/add', formdata);
    return message;
  }

  getUserByName(username){
    return this.http.get(this.url+`/getbyname/${username}`)
  }
  getAllUsers(){
    return this.http.get(this.url+'/getall');
  }

  getUserById(id){
    return this.http.get(this.url+`/getbyid/${id}`);
  }

  updateUser(id, data){
    return this.http.put(this.url+`/update/${id}`, data);
  }

  delete(id){
    return this.http.delete(this.url+`/delete/${id}`);
  }

  getUserByUsername(username){
    return this.http.get(this.url + `/getbyusername/${username}`);
  }

  logout(){
    this.loggedin=false;
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('cart');
    sessionStorage.removeItem('admin');
    this.router.navigate(['/logsign']);
  }
  getUserByEmail(email){
    return this.http.get(this.url+'/getbyemail/'+email);
  }

  addAddress(id, data){
    return this.http.put(this.url+`/addaddress/${id}`, data);
  }

  uploadImage(file){
    return this.http.post(this.url+'/addimg',file)
  }


}

