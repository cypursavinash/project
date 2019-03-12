import { Component, OnInit } from '@angular/core';
import { utilServicesService } from '../utilservices.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {

  value1='';
passtitle(value: string)
{ this.newMethod(value);
}
  constructor(public calcservices:utilServicesService) { }

  private newMethod(value: string) {
    this.value1 = value;
  }

  ngOnInit() {
  }
output(){
  console.log(this.value1);
}
addHero(value){
  console.log(value);
  this.calcservices.addcalc(value);
}
}