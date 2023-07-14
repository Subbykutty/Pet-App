import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LocalService } from 'src/app/services/local.service';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit{

 petForm:any;
 
  constructor(private router:Router,private service : DataService,private local : LocalService){}
  back(){
    this.router.navigate(['/admin/posts']); 
  }
  

  ngOnInit(): void {

  this.petForm=new FormGroup({
    category : new FormControl('',[
      Validators.required,
    ]),
    gender : new FormControl('',[Validators.required]),
    petName : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    numbers : new FormControl('',[Validators.required]),
    breed : new FormControl('',[Validators.required]),
    price : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required]),
    location : new FormControl('',[Validators.required]),
    colour : new FormControl('',[Validators.required]),
    registration : new FormControl ('',[Validators.required]),
    champion :  new FormControl('',[Validators.required]),
    microchip : new FormControl('',[Validators.required]),
    vaccination : new FormControl('',[Validators.required])
  })
  }

  get category() {
    return this.petForm.get('category');
  }
  get gender() {
    return this.petForm.get('gender');
  }
  get petName() {
    return this.petForm.get('petName');
  }
  get description() {
    return this.petForm.get('description');
  }
  get numbers() {
    return this.petForm.get('numbers');
  }
  get breed() {
    return this.petForm.get('breed');
  }
  get price() {
    return this.petForm.get('price');
  }
  get age() {
    return this.petForm.get('age');
  }
  get location() {
    return this.petForm.get('location');
  }
  get colour() {
    return this.petForm.get('colour');
  }
  get registration() {
    return this.petForm.get('registration');
  }
  get champion() {
    return this.petForm.get('champion');
  }
  get microchip() {
    return this.petForm.get('microchip');
  }
  get vaccination() {
    return this.petForm.get('gender');
  }

  addPet(){
    console.log('Value-->',this.petForm.value)
    if(this.petForm.valid){
      let payloader = 
      {
        "category_id":this.petForm.category,
        "gender":this.petForm.gender,
        "pet_name":this.petForm.petName,
        "description":this.petForm.description,
        "avail_qty":this.petForm.numbers,
        "breed":this.petForm.breed,
        "price":this.petForm.price,
        "age":this.petForm.age,
        "location":this.petForm.location,
        "color":this.petForm.colour,
        // "images":this.petForm.,
        "kcireg":this.petForm.registration,
        "champion":this.petForm.champion,
        "microchip":this.petForm.microchip,
        "vaccination":this.petForm.vaccination
  } 
  console.log('Payloader-->',payloader);
  this.service.PostMethod('pets/',payloader).then((res:any)=>{

    const myToken = res.token;
    const refreshtoken = res.refresh_token;
  this.local.set('token',myToken);
  this.local.set('refresh',refreshtoken);
          if(res.status == true){
            alert('Data Posted');
            this.router.navigate(['/admin/posts']); 
            
          }
          else{
            alert('Data Not Posted');
          }
  })

}
else{
  this.service.markFormGroupTouched(this.petForm);
  alert('Not Valid')
}
  }
}
