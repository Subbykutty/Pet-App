import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent {

  constructor(private router:Router){}
  back(){
    this.router.navigate(['/admin/accessories']);
  }
  addStock(){
    this.router.navigate(['/admin/add-products']);
  }

}
