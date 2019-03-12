import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { CalcdetailComponent } from './calcdetail/calcdetail.component';
import { menuComponent } from './menu/menu.component';
import { utilServicesService } from './utilservices.service';



@NgModule({
  declarations: [
    AppComponent,
        CalcComponent,
    CalcdetailComponent,
    menuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [utilServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
