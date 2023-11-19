import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabModule} from "../tab/tab.module";
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { PajamasComponent } from './pajamas/pajamas.component';
import { ChildrenClothingComponent } from './children-clothing.component';



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
