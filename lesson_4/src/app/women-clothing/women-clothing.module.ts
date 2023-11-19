import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DressesComponent } from './dresses/dresses.component';
import { JacketsComponent } from './jackets/jackets.component';



@NgModule({
  declarations: [
    DressesComponent,
    JacketsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WomenClothingModule { }
