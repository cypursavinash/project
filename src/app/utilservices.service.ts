import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class utilServicesService {

 constructor() { }
 //private calcList:Array<String> = new Array<String>();
 private calcList = [];
 addcalc(value){
   this.calcList.push(value);
   console.log("calc List",this.calcList);
 }
 getcalcList(){
   return this.calcList.slice();
 }
}