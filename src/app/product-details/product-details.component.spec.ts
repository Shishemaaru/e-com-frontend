import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, RouterTestingModule],
      providers: [ProductService, CartService, NgbCarouselConfig, HttpClientModule,HttpClient, HttpHandler],
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
