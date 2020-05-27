import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  browse(category='',brand=''){
    this.productservice.category=category;
    this.productservice.brand=brand;
    this.router.navigate(['/browse']);
  }
}
