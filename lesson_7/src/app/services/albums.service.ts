import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import {IAlbum, IAlbums} from "../interfaces/albums.interface";
import {Album} from "../components/albums/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  test: string = 'Test from service';
  getAlbumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbums[]> {
    return this.http.get<IAlbums[]>(this.getAlbumsUrl);
  }

  getAlbumsPipe(data: Observable<IAlbums[]>): Observable<IAlbum[]> {
    return data.pipe(
      map(data => {
        return data.map(album => {
          return new Album(album.id, album.title);
        })
      })
    );
  }

}
