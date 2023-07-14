import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {


  constructor(private router : Router,private local : LocalService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   console.log('authGuard');
      // const expectedRole : string []=route.data['expectedRole'];

   if(!this.local.ifLogin()){
    this.router.navigate(['auth/login']);   
    return false;
   }
      return true;
  }
  
}
