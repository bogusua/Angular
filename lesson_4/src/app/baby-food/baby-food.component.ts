import { Component } from '@angular/core';
import {MilkComponent} from "./milk/milk.component";
import {SnacksComponent} from "./snacks/snacks.component";

@Component({
  selector: 'app-baby-food',
  templateUrl: './baby-food.component.html',
  styleUrls: ['./baby-food.component.scss']
})
export class BabyFoodComponent {

  protected readonly MilkComponent = MilkComponent;
  protected readonly SnacksComponent = SnacksComponent;
}
