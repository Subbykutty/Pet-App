import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private local:LocalStorageService) {}

  set(key : any,data : any) {
    console.log('Yessssss--->',key)
    this.local.set(key,data);
  
  }
  get(keys : any) {
   return this.local.get(keys);
  }

  clear() {
    this.local.clear();
  }
  

  ifLogin(){
    // console.log(this.local.get('token'));
    if(this.local.get('token') ){
      console.log('Yes--->')
      return true;
    }
    else{
      return false;
    }
  }

}
