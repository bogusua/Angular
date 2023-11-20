import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  listBg: string = '';
  isShow: boolean = false;
  showString: string = '';
  stringArr: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry']

  public showText(str: string) {
    this.isShow = true;
    this.showString = str;
  }

  public changeListBg (color: string) {
    this.listBg = color;
  }
}
