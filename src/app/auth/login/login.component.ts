import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';
import { data } from 'jquery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private route:Router,private dataservice:DataService,private local:LocalService){}
 buttonClicked: EventEmitter<any> = new EventEmitter<any>();

 title="Hello There!"//for Unit Test

onButtonClick(): void {
	this.buttonClicked.emit();
}
  ngOnInit(): void {

    /**  var data = localStorage.setItem('dataa',JSON.stringify(this.loginForm.value));**/

this.loginForm = new FormGroup({
  name: new FormControl('', [
    Validators.required,
  ]),
    password: new FormControl('', [
    Validators.required,
  ]),
});
  }
  get name() {
    return this.loginForm.get('name');
  }
  get password() {
    return this.loginForm.get('password');
  }
  loginbtn(){

    console.log('loginForm value-->',this.loginForm.value)
   
 
    if(this.loginForm.valid){
      
      let payloader = {
        "mobile_no":this.loginForm.value.name,
        "password":this.loginForm.value.password
      }
      console.log("Payloader-->",payloader);
      this.dataservice.PostMethod('users/login',payloader).then((res: any) => {
        if (res.status == true) {

        const myToken = res.token;
        const refreshtoken = res.refresh_token;
        this.local.set('token',myToken);
        this.local.set('refresh',refreshtoken);
        this.route.navigate(["admin/dashboard"]);
        }
          else{
             alert("Login Invalid"); 
            }
      });
      }
   else {
      this.dataservice.markFormGroupTouched(this.loginForm);
    }

  }

checker(){
    const checkbox = document.getElementById(
      'subscribe',
) as HTMLInputElement | null;
    
    if (checkbox != null) {
      checkbox.checked = true;
    
      console.log(checkbox.checked);
    
      checkbox.checked = false;
    }
  }
  }

