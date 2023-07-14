import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {

  constructor(private router:Router){}
     
  back(){
    this.router.navigate(['/admin/posts'])
}
}
