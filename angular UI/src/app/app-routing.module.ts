import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { SeeProdComponent } from './see-prod/see-prod.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';



const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'headerfooter', component: HeaderFooterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'add', component: CreateOrderComponent },
  { path: 'prod', component: SeeProdComponent },
  { path: 'update/:id', component: UpdateOrderComponent },
  { path: 'details/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
