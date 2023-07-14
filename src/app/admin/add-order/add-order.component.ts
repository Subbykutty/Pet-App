import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent {

  constructor(private router:Router){
    
  }

  back(){
    this.router.navigate(['/admin/orders'])
  }

}
