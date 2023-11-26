import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeExercisesService implements InMemoryDbService {

  private exercises = [
    { id: 1, name: 'Exercise 1' },
    { id: 2, name: 'Exercise 2' },
    { id: 3, name: 'Exercise 3' },
    { id: 4, name: 'Exercise 4' },
    { id: 5, name: 'Exercise 5' },
    { id: 6, name: 'Exercise 6' },
    { id: 7, name: 'Exercise 7' },
  ];

  constructor() {}

  createDb() {
    console.log('db works')
    return { exercises: this.exercises };
  }

  // HTTP GET interceptor
  get(reqInfo: RequestInfo) {

    const searchCN = reqInfo.url.split('/');
    const collectionName = searchCN[searchCN.length - 1];

    if (collectionName === 'exercises') {
      console.log('Intercept GET request:', reqInfo)
      return this.getExercises(reqInfo)
    }
    return undefined; // let the default GET handle all others
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'exercises') {
      console.log('Intercept POST request:', reqInfo)
      return this.postExercises(reqInfo)
    }
    return undefined; // let the default GET handle all others
  }

  put(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'exercises') {
      console.log('Intercept PUT request:', reqInfo)
      return this.putExercises(reqInfo)
    }
    return undefined; // let the default GET handle all others
  }

  delete(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'exercises') {
      console.log('Intercept DELETE request:', reqInfo)
      return this.delExercises(reqInfo)
    }
    return undefined; // let the default GET handle all others
  }

  getExercises(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      status: 200,
      body: this.exercises,
    }));
  }

  postExercises(reqInfo: RequestInfo) {
    const postBody = reqInfo.utils.getJsonBody(reqInfo.req)
    this.exercises.push(postBody)
    return reqInfo.utils.createResponse$(() => ({
      status: 200,
      body: postBody
    }));
  }

  putExercises(reqInfo: RequestInfo) {
    const putBody = reqInfo.utils.getJsonBody(reqInfo.req)
    this.exercises.filter((item) => {
      item.id === putBody.id
        ? item.name = putBody.name
        : null
    })
    return reqInfo.utils.createResponse$(() => ({
      status: 200,
      body: putBody
    }));
  }

  delExercises(reqInfo: RequestInfo) {
    this.exercises = []
    // const delBody = reqInfo.utils.getJsonBody(reqInfo.req)
    // this.exercises.filter(exercise => exercise.id !== delBody.id);
    return reqInfo.utils.createResponse$(() => ({
      status: 200
    }));
  }

}
