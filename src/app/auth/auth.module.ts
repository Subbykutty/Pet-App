import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';




export const routes: Routes = [
 
  { path: '',component:AuthComponent, 
children:[
  {path:'login',component:LoginComponent}
]
},
]

@NgModule({
  declarations: [
    LoginComponent,
    ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
