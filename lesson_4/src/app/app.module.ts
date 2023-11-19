import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SchoolModule} from "./school/school.module";
import {BabyFoodModule} from "./baby-food/baby-food.module";
import {ChildrenClothingModule} from "./children-clothing/children-clothing.module";
import {MenClothingModule} from "./men-clothing/men-clothing.module";
import {WomenClothingModule} from "./women-clothing/women-clothing.module";
import {ToysModule} from "./toys/toys.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchoolModule,
    BabyFoodModule,
    ChildrenClothingModule,
    MenClothingModule,
    WomenClothingModule,
    ToysModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
