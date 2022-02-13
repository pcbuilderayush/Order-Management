import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { SeeProdComponent } from './see-prod/see-prod.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    UpdateOrderComponent,
    SeeProdComponent,
    LoginComponent,
    LogoutComponent,
    HeaderFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {
      
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true,
  
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
