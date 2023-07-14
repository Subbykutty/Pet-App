import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {

  constructor(private router:Router){}
   newAdd(){

    this.router.navigate(['/admin/ad-new'])

   } 
   details(){
    this.router.navigate(['/admin/ads-detail'])
   }
  }


