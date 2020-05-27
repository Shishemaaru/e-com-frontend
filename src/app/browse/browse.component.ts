import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  all_products;
  Right = faArrowRight;
  Left = faArrowLeft;
  searchby='name';
  start=0;
  len=10;
  end= this.start+this.len;
  page=1;
  constructor(private productservice: ProductService, private activated: ActivatedRoute, private cartservice: CartService) { }

  ngOnInit() {
    let category = this.productservice.category;
    let brand = this.productservice.brand;
    
    this.refreshList(category, brand);
  }

  refreshList(category="", brand=""){
    this.productservice.getallproducts().subscribe(data => {
      console.log(data);
      this.all_products = data;
      console.log(category,brand);
      if(category){
        this.all_products=this.all_products.filter(product=>{
          return product.prodcat==category;
        })
      }
      if(brand){
        this.all_products=this.all_products.filter(product=>{
          return product.prodbrand==brand;
        })
      }
      if(this.productservice.lastSort=='price'){
        this.sortprice();
      }
    })
  }

  addtocart(product){
    let cartitem = {data: product, quantity: 1}
    if(!this.itemincart(product)){
      this.cartservice.additem(cartitem); 
    }
   
    }
  
    itemincart(product){
      let cartitems = this.cartservice.cartItems;
      for(let item of cartitems){
        if(item.data._id==product._id){
          // this.addedtocart = true;
          return true;
        }
        return false;
      }
    }


  getAllProducts(query = '', sort = false, reverse = false, sortprice = false){
    this.productservice.getallproducts().subscribe(data => {
      console.log(data);
      this.all_products=data;
 
      if(query){
        if(this.searchby == 'name'){
          this.all_products = this.all_products.filter(product => {
            return product.name.toLowerCase().includes(query.toLowerCase())
          })
        }
        
      }
    })
  }
 
  search(query){
    this.getAllProducts(query = query);
  }
 
  sort(reverse = false){
    if(reverse){
      this.all_products.sort((product1, product2) => {
        if (product1.prodname < product2.prodname) {
          return 1;
        }else{
          return -1;
        }
      })
    }
    else
      this.all_products.sort((product1, product2) => {
        if (product1.prodname > product2.prodname) {
          return 1;
        }else{
          return -1;
        }
      })
  }
 
  sortprice(){
    this.productservice.lastSort='price';
    this.all_products.sort((product1, product2) => {
      if (product1.prodprice > product2.prodprice) {
        return 1;
      }else if(product1.prodprice < product2.prodprice){
        return -1;
      }else{
        return 0;
      }
    })
}

  next(products){
    if((this.end+this.len)<=products.length){
      this.start = this.end;
      this.end+=this.len;
      this.page +=1;
    }
 
    console.log(this.start+' '+this.end)
  }
 
  prev(){
    if((this.start-this.len)>-1){
      this.end = this.start;
      this.start-=this.len;
      this.page -=1;
    }
 
    console.log(this.start+' '+this.end)
  }

}

