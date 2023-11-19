import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollsComponent } from './dolls/dolls.component';
import { CarsComponent } from './cars/cars.component';



@NgModule({
  declarations: [
    DollsComponent,
    CarsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToysModule { }
