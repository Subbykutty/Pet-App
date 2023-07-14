import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent {
  constructor(private router:Router){
   
  }
  showDetails(){
    this.router.navigate(['/admin/food-details'])
  }

  add(){
    this.router.navigate(['/admin/add-products'])
  }
  

}
