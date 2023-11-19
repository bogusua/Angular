import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SchoolModule} from "./school/school.module";
import {BabyFoodModule} from "./baby-food/baby-food.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchoolModule,
    BabyFoodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
