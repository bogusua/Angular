import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabModule} from "../tab/tab.module";
import { TShirtsComponent, PajamasComponent, ChildrenClothingComponent } from './index';



@NgModule({
  declarations: [
    TShirtsComponent,
    PajamasComponent,
    ChildrenClothingComponent
  ],
  imports: [
    CommonModule,
    TabModule
  ]
})
export class ChildrenClothingModule { }
