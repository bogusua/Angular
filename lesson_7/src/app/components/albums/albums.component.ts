import { Component } from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {IAlbum, IAlbums} from "../../interfaces/albums.interface";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {

  albumsData: IAlbums[] = [];
  albumsPipeData: IAlbum[] = [];

  constructor(private albumService: AlbumsService) {
    const data = this.albumService.getAlbums()
      data.subscribe({
          next: (data) => {
            this.albumsData = data;
            console.dir(this.albumsData);
          },
          error: (error) => {
            console.log("Error via request: ", error)
          },
          complete: () => {
            console.log('Success get data')
          }
        });

    this.albumService.getAlbumsPipe(data).subscribe({
        next: (data) => {
          this.albumsPipeData = data;
          console.dir(this.albumsPipeData);
        },
        error: (error) => {
          console.log("Error via request: ", error)
        },
        complete: () => {
          console.log("Success MAP data to new Album()")
        }
      });
  }

}
