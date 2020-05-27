import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers : [ NgbCarouselConfig ]
 
})
export class ProductDetailsComponent implements OnInit {
  currentUser;
  product;
  reviews;
  userreview;
  bvar = false;
  quantity=1;
  addedtocart=false;
  plus= faPlus;
  minus= faMinus;

  constructor(private productservice: ProductService, private activated: ActivatedRoute, config: NgbCarouselConfig, private cartservice: CartService) { 
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.productservice.getProductById(id).subscribe(data =>{
      console.log(data);
      this.product = data;
      this.getReviews();
      this.getUserReviews();
      this.checkitemincart();

      

    })
   
  }

  getReviews(){
    this.productservice.fetchReviewsbyProduct(this.product._id).subscribe(data =>{
      this.reviews = data;
      console.log(data);

    
    })

  }

  showdetails(){
    this.bvar = !this.bvar;
    

  }

  getUserReviews(){
    for(let review of this.reviews){
      if(review.user==this.currentUser._id){
        this.userreview == review;
      }
    }
  }


  addtocart(){
  let cartitem = {data: this.product, quantity: this.quantity}
  this.cartservice.additem(cartitem);
  this.checkitemincart();

  }

  checkitemincart(){
    let cartitems = this.cartservice.cartItems;
    for(let item of cartitems){
      if(item.data._id==this.product._id){
        this.addedtocart = true;
      }
    }
  }
}
