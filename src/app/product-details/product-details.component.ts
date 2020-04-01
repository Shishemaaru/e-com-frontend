import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentUser;
  product;
  reviews;
  userreview;

  constructor(private productservice: ProductService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.productservice.getProductById(id).subscribe(data =>{
      console.log(data);
      this.product = data;
      this.getReviews();
      this.getUserReviews();

    })

  }

  getReviews(){
    this.productservice.fetchReviewsbyProduct(this.product._id).subscribe(data =>{
      this.reviews = data;
      console.log(data);

    
    })

  }

  getUserReviews(){
    for(let review of this.reviews){
      if(review.user==this.currentUser._id){
        this.userreview == review;
      }
    }
  }


}
