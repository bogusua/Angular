import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private baseUrl = '/api/exercises';

  constructor(private http: HttpClient) { }

  getExercises(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  postExercises(body: {id: number, name: string}): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }

  putExercises(body: {id: number, name: string}): Observable<any> {
    return this.http.put(this.baseUrl, body);
  }

  delExercises(body: {id: number, name: string}): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
