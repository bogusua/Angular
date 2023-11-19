import {Component, NgModuleRef} from '@angular/core';
import {PajamasComponent} from "./pajamas/pajamas.component";
import {TShirtsComponent} from "./t-shirts/t-shirts.component";

@Component({
  selector: 'app-children-clothing',
  templateUrl: './children-clothing.component.html',
  styleUrls: ['./children-clothing.component.scss']
})
export class ChildrenClothingComponent {

  constructor(private moduleRef: NgModuleRef<any>) {
    console.log('Loaded Modules: ', this.moduleRef.injector.get(NgModuleRef));

  }

  protected readonly PajamasComponent = PajamasComponent;
  protected readonly TShirtsComponent = TShirtsComponent;
}
