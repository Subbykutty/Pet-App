import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent {
  constructor(private router:Router){}
  
  back(){
    this.router.navigate(['/admin/ads']);
  }

}
