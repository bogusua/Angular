import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollsComponent } from './dolls/dolls.component';
import { CarsComponent } from './cars/cars.component';
import { ToysComponent } from './toys.component';
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
