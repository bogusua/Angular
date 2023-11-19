import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { PensComponent } from './pens/pens.component';
import { SchoolComponent } from './school.component';
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
