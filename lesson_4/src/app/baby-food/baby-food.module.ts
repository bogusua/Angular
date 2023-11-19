import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilkComponent } from './milk/milk.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BabyFoodComponent } from './baby-food.component';
import {TabModule} from "../tab/tab.module";



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
