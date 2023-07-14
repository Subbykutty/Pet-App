import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit,Directive } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  menuLists=['Pet','Foods & Accessories']
  selected:any;
  orderData:any=[];
  // ordersObj:any=[];
  exact: any;
  ordersObj: any =[];


  ngOnInit(): void {
    this.openMenuList("Pet");
    this.orders();
  }


  constructor(private service:DataService){}
  pets=true;

  pet(){
    this.pets=false;
    // console.log('working')
  }
  openMenuList(menuList : any){
    // console.log("menylist",menuList)
    this.selected = menuList
  }
orders(){
  
  this.service.getMethod('order/').then((res:any)=>{

    this.orderData=res.data;
 console.log('Ordes-->',this.orderData)

 this.orderData.map((i:any)=>{
  console.log("@@@@@",i.orders.address_line)
 })

 for(let i =0;i<=this.orderData.length;i++){
  // console.log('Exact-->',this.orderData[i].orders)
  this.ordersObj=this.orderData[i].orders.products;
  // console.log('Prods-->',this.ordersObj);
 }
  //   for (let entry of this.orderData) {

  //     // console.log('entry-->', entry.orders.city)

  //     this.ordersObj = entry.orders;

  //     console.log('data-->',this.ordersObj.city)

  // }
  })
}
}
