import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePasswordComponent } from './manage-password.component';
import { MailService } from '../mail.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpHandler, HttpClient, HttpClientModule } from '@angular/common/http';

xdescribe('ManagePasswordComponent', () => {
  let component: ManagePasswordComponent;
  let fixture: ComponentFixture<ManagePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserDynamicTestingModule],
      providers: [MailService, HttpHandler, HttpClient, HttpClientModule],
      declarations: [ ManagePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
