import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabModule} from "../tab/tab.module";
import { MilkComponent, SnacksComponent, BabyFoodComponent } from './index';



@NgModule({
  declarations: [
    MilkComponent,
    SnacksComponent,
    BabyFoodComponent
  ],
  imports: [
    CommonModule,
    TabModule
  ]
})
export class BabyFoodModule { }
