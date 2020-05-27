import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

xdescribe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ChangeDetectorRef, UserService, OrderService, CartService, FormBuilder,HttpClient, HttpClientModule, HttpHandler],
      declarations: [ PaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
