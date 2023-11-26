import { Component } from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {Albums} from "../../interfaces/albums.interface";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  responseData: Albums[] = [];

  constructor(private albumService: AlbumService) {
    this.albumService.getAlbums().subscribe(
      (data) => {
        this.responseData = data;
        console.dir(this.responseData);
      },
      (error) => {
        console.log("Error via request: ", error)
      }
    )
  }

}
