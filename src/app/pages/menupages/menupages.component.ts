import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-menupages',
  templateUrl: './menupages.component.html',
  styleUrls: ['./menupages.component.css']
})
export class MenupagesComponent {
  
  constructor(private param: ActivatedRoute, private service: OrderDetailsService) {}
  getMenuId:any;
  menuData:any;
  
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
   console.log(this.getMenuId, 'getmenu');
   if(this.getMenuId){
    this.menuData = this.service.foodDetails.filter((value)=>{
      return value.id == this.getMenuId
    });
    console.log(this.menuData,'menuData>>')
   }
  }



}
