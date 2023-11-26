import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessComponent } from "./fitness.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { FakeExercisesService } from "../../services/fake-exercises.service";
import { ExercisesService } from "../../services/exercises.service";

@NgModule({
  declarations: [
    FitnessComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      FakeExercisesService,
      {
        passThruUnknownUrl: true
      }
    )
  ],
  providers: [
    ExercisesService,
    FakeExercisesService
  ]
})
export class FitnessModule { }
