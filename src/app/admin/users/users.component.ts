import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
 

  constructor(private router:Router){}
  addUser(){
    this.router.navigate(['/admin/add-user'])
  }
  userDetails(){
    this.router.navigate(['/admin/user-details'])
  }

}
