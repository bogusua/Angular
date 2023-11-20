import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BabyFoodModule,
  ChildrenClothingModule,
  MenClothingModule,
  SchoolModule,
  ToysModule,
  WomenClothingModule
} from "./index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BabyFoodModule,
    ChildrenClothingModule,
    MenClothingModule,
    SchoolModule,
    ToysModule,
    WomenClothingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
