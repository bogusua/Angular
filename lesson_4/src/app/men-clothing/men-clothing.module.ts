import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { MenClothingComponent } from './men-clothing.component';
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
