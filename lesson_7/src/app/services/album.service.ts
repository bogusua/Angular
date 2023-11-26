import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Albums} from "../interfaces/albums.interface";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  test: string = 'Test from service';
  getAlbumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.getAlbumsUrl);
  }
}
