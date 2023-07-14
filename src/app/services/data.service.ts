import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'jquery';
import { LocalStorageService } from 'angular-web-storage';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  serverURL = 'https://demo.emeetify.com:81/pet/';//Login (Post);

  constructor( private http : HttpClient,private local:LocalStorageService) { }
    markFormGroupTouched(formGroup: FormGroup) {
    (<any> Object)
      .values(formGroup.controls)
      .forEach((control: FormGroup<any>) => {
        control.markAsTouched();

        if (control.controls) {
          this.markFormGroupTouched(control);
        }
      });
  }

  PostMethod(Link:string,payloader :any){
  
      return new Promise(async (resolve,reject)=>{
        await this.http.post(this.serverURL+Link,payloader).subscribe((dataaa:any)=>{
          console.log('Link-->',this.serverURL+Link)
          console.log('data-->',dataaa)
          resolve(dataaa);
        }, 
        (error:any)=>{
          reject(error);
        });
      });
    
    }
    getMethod(Link : string){

                           
                          // {
           //headers:     //'Access-Control-Allow-Origin': '*',
                          // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
                          // 'x-access-token':  this.local.get("token"),
                          // 'x-refresh-token': this.local.get("refresh") 
                          // }

      let options: any = { headers: this.appendHeaders() }

      return new Promise(async (resolve,reject)=>{
        await this.http.get(this.serverURL+Link,options ).subscribe((data:any)=>{
          console.log('Dashboard-->',data);
          resolve(data);
        },
        (error:any)=>{
          reject(error)
        })
      })
    }





        appendHeaders() { 
        this.local.get("token");
        // console.log(' this.local.get("token")', this.local.get("token"))
        // console.log(' this.local.get("token")', this.local.get("refresh"))
        let headers: HttpHeaders;
          headers = new HttpHeaders(
           {
            //'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
             'x-access-token':  this.local.get("token"),
             'x-refresh-token': this.local.get("refresh") 
           }
          )
            console.log("headrrs",headers)
        
        return headers;
      }

  }

