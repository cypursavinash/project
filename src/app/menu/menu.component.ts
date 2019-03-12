import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class menuComponent implements OnInit {
  public num1="";
  public hide:boolean=false;
  right_Number=[];
  ngOnInit() {
      
  }
    jump()
    {
      let temp = parseInt(this.num1);
      if (!isNaN(temp)){
        if(temp <=5 ){
        console.log(this.num1)
        this.hide = true;
        this.right_Number=new Array (temp);
      
        for( var c=0 ;c<temp ;c++)
        {
        console.log(this.right_Number);
        this.right_Number [c]='';
        }
        console.log(this.right_Number);
      
      
      }
      else
      {
        console.log("number is large ");
        this.hide =false;
      
      }
    }
      else
      {
        console.log("please enter only intiger value:")
        this.hide=false;
      }
    }
  }