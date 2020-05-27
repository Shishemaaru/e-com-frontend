import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  
  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  browse(category='',brand=''){
    this.productservice.category=category;
    this.productservice.brand=brand;
    this.router.navigate(['/browse']);
  }

}
