import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DressesComponent } from './dresses/dresses.component';
import { JacketsComponent } from './jackets/jackets.component';
import { WomenClothingComponent } from './women-clothing.component';
import {TabModule} from "../tab/tab.module";



@NgModule({
  declarations: [
    DressesComponent,
    JacketsComponent,
    WomenClothingComponent
  ],
  imports: [
    CommonModule,
    TabModule
  ]
})
export class WomenClothingModule { }
