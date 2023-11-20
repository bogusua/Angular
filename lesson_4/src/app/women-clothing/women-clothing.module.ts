import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DressesComponent, JacketsComponent, WomenClothingComponent } from './index';
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
