import { Component, OnInit } from '@angular/core';
import { utilServicesService } from '../utilServices.service';


@Component({
  selector: 'app-calcdetail',
  templateUrl: './calcdetail.component.html',
  styleUrls: ['./calcdetail.component.css']
})
export class CalcdetailComponent implements OnInit {
  calcDetail = []
  constructor(public calcService:utilServicesService) { }

  ngOnInit() {
  }
refresh(){
  this.calcDetail = this.calcService.getcalcList();
  console.log("calc detail List", this.calcDetail);
}
}