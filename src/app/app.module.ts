import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatCardModule} from '@angular/material';
import { BrowseComponent } from './browse/browse.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { ReviewComponent } from './review/review.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxStarRatingModule } from 'ngx-star-rating';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManagePasswordComponent } from './manage-password/manage-password.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LogsignComponent } from './logsign/logsign.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AppliancesComponent } from './appliances/appliances.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { WebstatsComponent } from './webstats/webstats.component';
import { OrdermanagerComponent } from './ordermanager/ordermanager.component';
import {MatExpansionModule} from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import { PhonesComponent } from './phones/phones.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { UserordersComponent } from './userorders/userorders.component';








@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    HeaderComponent,
    AddProductComponent,
    LoginComponent,
    BrowseComponent,
    ManagerUserComponent,
    ReviewComponent,
    ProductDetailsComponent,
    HomeComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ManagePasswordComponent,
    ManageAddressComponent,
    CartComponent,
    PaymentComponent,
    LogsignComponent,
    AppliancesComponent,
    AccessoriesComponent,
    WebstatsComponent,
    OrdermanagerComponent,
    PhonesComponent,
    UserordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule,
    SweetAlert2Module,
    NgbModule,
    NgxStarRatingModule,
    FontAwesomeModule,
    MatTabsModule,
    MatExpansionModule,
    MatRippleModule,
    AnimateOnScrollModule,
   
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

