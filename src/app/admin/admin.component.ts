import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
   source:any;
  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });

  this.source=localStorage.getItem('data');
  
  }

  constructor(private router:Router,private local:LocalService){}
  chat(){
    this.router.navigate(['/admin/personal-chat']);
  }
  myProfile(){
      this.router.navigate(['/admin/profile']);
  }

  logout(){
      this.local.clear();
  }



}
