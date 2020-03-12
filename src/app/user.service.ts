import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= "http://localhost:3000/user"
  constructor(private http: HttpClient) { }
  
  addUser(formdata){
    let message = this.http.post(this.url+'/add', formdata);
    return message;
  }

  getUserByUsername(username){
    return this.http.get(this.url+`/getbyname/${username}`)
  }
  getAllUsers(){
    return this.http.get(this.url+'/getall');
  }

  getUserById(id){
    return this.http.get(this.url+`/getbyid/${id}`);
  }

  updateUser(user, id){
    return this.http.put(this.url+`/update/${id}`, user);
  }

  delete(id){
    return this.http.delete(this.url+`/delete/${id}`);
  }
}
