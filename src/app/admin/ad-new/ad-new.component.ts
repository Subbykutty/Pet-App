import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-new',
  templateUrl: './ad-new.component.html',
  styleUrls: ['./ad-new.component.scss']
})
export class AdNewComponent {

  constructor(private router:Router){}

    back(){
      this.router.navigate(['/admin/ads'])
    }
  }


