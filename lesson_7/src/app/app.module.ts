import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumsService } from "./services/albums.service";
import {HttpClientModule} from "@angular/common/http";
import {FakeExercisesService} from "./services/fake-exercises.service";
import {ExercisesService} from "./services/exercises.service";
import {FitnessModule} from "./components/fitness/fitness.module";
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    CounterComponent,
    // FitnessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FitnessModule
  ],
  providers: [AlbumsService, ExercisesService, FakeExercisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
