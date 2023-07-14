import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AdminComponent } from './admin/admin.component';
// import { OrdersComponent } from './admin/orders/orders.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    MatTabsModule,HttpClientModule,
    AngularWebStorageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { 

}
