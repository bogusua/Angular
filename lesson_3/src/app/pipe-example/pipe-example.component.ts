import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent {
  demoData = {
    currentDate: new Date(),
    text: 'Angular Pipes',
    numberValue: 12345.6789,
    percentValue: 0.75,
    price: 123.45,
    object: {name: 'John', age: 30, city: 'New York'},
    array: ['apple', 'banana', 'cherry', 'date', 'elderberry']
  }
}
