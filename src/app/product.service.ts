import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  lastSort;
  category;
  brand;
  url="http://localhost:3000/product"

  constructor(private http: HttpClient) {}
    
  addproductdetail(formdata){
    return this.http.post(this.url+'/add', formdata);
  }
  getallproducts(){
    return this.http.get(this.url+'/getall');
  }
  uploadImage(file){
    return this.http.post(this.url+'/addimg',file)
  }
  fetchReviewsbyProduct(id){
  return this.http.get(`http://localhost:3000/review/getreviews/${id}`)
  }
  addReview(data){
    return this.http.post( 'http://localhost:3000/review/add', data)
  }
  getProductById(id){
    return this.http.get(this.url+`/getbyid/${id}`)
  }
}