import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  constructor(private router:Router){

  }
  back(){
    this.router.navigate(['/admin/orders'])
  }

}
