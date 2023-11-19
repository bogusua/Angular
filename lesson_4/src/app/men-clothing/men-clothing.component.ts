import { Component } from '@angular/core';
import {PantsComponent} from "./pants/pants.component";
import {ShirtsComponent} from "./shirts/shirts.component";

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.scss']
})
export class MenClothingComponent {

  protected readonly PantsComponent = PantsComponent;
  protected readonly ShirtsComponent = ShirtsComponent;
}
