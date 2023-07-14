import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './admin/admin.component';

// import { AddPetComponent } from './admin/add-pet/add-pet.component';


 export const routes: Routes = [

  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  // {path : 'newAdmin',component:AddPetComponent},
  // {path:'admin',component:AdminComponent},

  {path:'auth',loadChildren:()=>
  import('./auth/auth.module').then(auth=>auth.AuthModule)
  },
  {
    path:'admin',loadChildren:()=> 
    import('./admin/admin.module').then(admin=>admin.AdminModule),
    canActivate:[AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
