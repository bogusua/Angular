import { Component } from '@angular/core';
import {ExercisesService} from "../../services/exercises.service";


@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})

export class FitnessComponent {

  exerciseList: any;
  exercisePostBody: any;
  exercisePutBody: any;
  exerciseDelBody: any;

  constructor(private exercisesService: ExercisesService) {
    this.getExercises()
  }

  getExercises() {
    this.exercisesService.getExercises().subscribe({
      next: (data) => {
        this.exerciseList = data
        console.log('GET', this.exerciseList)
      },
      error: (e) => {
        throw new Error(e.message)
      }
    })
  }

  postExercises() {
    const maxId = this.exerciseList
      .reduce((max: number, exercise: {id: number, name: string}) => (
        exercise.id > max ? exercise.id : max
      ), 0
    ) + 1;
    const reqBody = {id: maxId, name: 'Exercise ' + maxId}

    this.exercisesService.postExercises(reqBody).subscribe({
      next: (data) => {
        this.exercisePostBody = data;
        console.log('POST', this.exercisePostBody)
      }
    });
  }
  putExercises() {
    const rndId = Math.floor(Math.random() * this.exerciseList.length) + 1;
    const reqBody = {id: rndId, name: 'Exercise ' + rndId + ' UPDATED'}

    this.exercisesService.putExercises(reqBody).subscribe({
      next: (data) => {
        this.exercisePutBody = data;
        console.log('PUT', this.exercisePutBody)
      }
    });
  }
  delExercises() {
    this.exercisesService.delExercises().subscribe({
      next: () => {
        this.exerciseDelBody = (this.exerciseList.length) ? 'Deleted' : '';
        console.log('DELETE', this.exerciseDelBody)
      }
    });
  }


}
