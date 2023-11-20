import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent, PensComponent, SchoolComponent } from './index';
import {TabModule} from "../tab/tab.module";



@NgModule({
  declarations: [
    BooksComponent,
    PensComponent,
    SchoolComponent
  ],
  imports: [
    CommonModule,
    TabModule
  ]
})
export class SchoolModule { }
