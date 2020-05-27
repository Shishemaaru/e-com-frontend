import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardComponent } from './user-dashboard.component';
import { UserService } from '../user.service';
import { HttpClientModule, HttpHandler, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

xdescribe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [UserService, FormBuilder, HttpClientModule, HttpHandler, HttpClient],
      declarations: [ UserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
