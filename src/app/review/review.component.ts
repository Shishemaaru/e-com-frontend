import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewForm;
  @Input() reviews;
  @Input() myreview;
  @Input() product_id;
  currentUser;
  newreview = true;
  constructor(private formbuilder: FormBuilder, private productservice: ProductService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    
    if(this.reviews){
      this.getMyReview();
    }
    this.initForm(this.myreview);
  }

  addReview(formdata){
    if(this.newreview){
      this.productservice.addReview(formdata).subscribe(data => {
        console.log(data);
      })
    }
  }

  initForm(review){
    console.log(review);
    if(review){
      this.reviewForm = this.formbuilder.group(review);
      return;
    }
    this.reviewForm = this.formbuilder.group({
      user : this.currentUser._id,
      product : this.product_id,
      rating : 0,
      review : ''
    })
  }

  getMyReview(){
    for(let review of this.reviews){
      if(review.user._id == this.currentUser._id){
        this.myreview = review;
        this.newreview = false;
      }
    }
  }
}