import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShirtsComponent, PantsComponent, MenClothingComponent } from './index';
import {TabModule} from "../tab/tab.module";



@NgModule({
  declarations: [
    ShirtsComponent,
    PantsComponent,
    MenClothingComponent
  ],
  imports: [
    CommonModule,
    TabModule
  ]
})
export class MenClothingModule { }
