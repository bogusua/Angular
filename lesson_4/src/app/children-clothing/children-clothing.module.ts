import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { PajamasComponent } from './pajamas/pajamas.component';
import { ChildrenClothingComponent } from './children-clothing.component';
import {TabModule} from "../tab/tab.module";



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
