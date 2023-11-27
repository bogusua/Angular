import {IAlbum} from "../../interfaces/albums.interface";

export class Album implements IAlbum {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
