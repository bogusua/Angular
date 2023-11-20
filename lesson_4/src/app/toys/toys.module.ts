import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollsComponent, CarsComponent, ToysComponent } from './index';
import {TabModule} from "../tab/tab.module";



@NgModule({
  declarations: [
    DollsComponent,
    CarsComponent,
    ToysComponent
  ],
  imports: [
    CommonModule, TabModule
  ]
})
export class ToysModule { }
