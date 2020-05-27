import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManagePasswordComponent } from './manage-password/manage-password.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginGuard } from './guards/login.guard';
import { LogsignComponent } from './logsign/logsign.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrdermanagerComponent } from './ordermanager/ordermanager.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  { path : "register", component : RegisterComponent},
  { path : "admin", component : AdminComponent},
  { path : "product", component : AddProductComponent},
  { path : "login", component : LoginComponent},
  { path : "logsign", component : LogsignComponent},
  { path : "browse", component : BrowseComponent},
  { path : "details/:id", component : ProductDetailsComponent},
  { path : "home", component : HomeComponent},
  { path : "user-dashboard", component : UserDashboardComponent, canActivate : [LoginGuard]},
  { path : "manage-password", component : ManagePasswordComponent},
  { path : "manage-address", component : ManageAddressComponent},
  { path : "cart", component : CartComponent},
  { path : "payment", component : PaymentComponent},
  { path : "appliances", component : AppliancesComponent},
  { path : "accessories", component : AccessoriesComponent},
  { path : "admin-dashboard", component : AdminDashboardComponent, canActivate: [AdminGuard]},
  { path : "ordermanager", component : OrdermanagerComponent},
  { path : "browse", component : BrowseComponent},
  { path : '',redirectTo:'/logsign', pathMatch: 'full'}
  




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
