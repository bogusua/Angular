import { Component } from '@angular/core';
import {DressesComponent} from "./dresses/dresses.component";
import {JacketsComponent} from "./jackets/jackets.component";

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.scss']
})
export class WomenClothingComponent {
  protected readonly DressesComponent = DressesComponent;
  protected readonly JacketsComponent = JacketsComponent;
}
