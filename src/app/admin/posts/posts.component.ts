import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(private router:Router){
  }
  goPlaces() {
    this.router.navigate(['/admin/about']);
  }
  myPet(){
    this.router.navigate(['/admin/pet']);
  }

}
