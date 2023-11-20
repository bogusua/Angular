import { Component } from '@angular/core';
import {DollsComponent} from "./dolls/dolls.component";
import {CarsComponent} from "./cars/cars.component";

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss']
})
export class ToysComponent {

    protected readonly DollsComponent = DollsComponent;
  protected readonly CarsComponent = CarsComponent;
}
