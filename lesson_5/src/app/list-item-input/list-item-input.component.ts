import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-item-input',
  templateUrl: './list-item-input.component.html',
  styleUrls: ['./list-item-input.component.scss']
})
export class ListItemInputComponent {

  @Input() input: string = '';

}
