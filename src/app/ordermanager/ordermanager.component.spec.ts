import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermanagerComponent } from './ordermanager.component';
import { OrderService } from '../order.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('OrdermanagerComponent', () => {
  let component: OrdermanagerComponent;
  let fixture: ComponentFixture<OrdermanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, RouterTestingModule],
      providers: [OrderService, HttpClientModule, HttpHandler, HttpClient],
      declarations: [ OrdermanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermanagerComponent);
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
