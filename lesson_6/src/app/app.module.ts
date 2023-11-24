import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsService} from "./products.service";
import {FormsModule} from "@angular/forms";
import {NumbersService} from "./numbers.service";
import {CardsContainerComponent} from "./cards-container/cards-container.component";
import {CardBlockComponent} from "./card-block/card-block.component";

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent,
    CardBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ProductsService, NumbersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
