import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogsignComponent } from './logsign.component';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

xdescribe('LogsignComponent', () => {
  let component: LogsignComponent;
  let fixture: ComponentFixture<LogsignComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // importing the test modules
      imports: [BrowserDynamicTestingModule, RouterTestingModule],
      // the modules that are imported in the typescript file of this componenent are added
      providers: [FormBuilder, AuthService, UserService, HttpClientModule, HttpClient, HttpHandler],
      declarations: [ LogsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
