import {Component, NgModuleRef} from '@angular/core';
import {BooksComponent} from "./books/books.component";
import {PensComponent} from "./pens/pens.component";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent {

  constructor(private moduleRef: NgModuleRef<any>) {
    console.log('Loaded Modules: ', this.moduleRef.injector.get(NgModuleRef));

  }

  protected readonly BooksComponent = BooksComponent;
  protected readonly PensComponent = PensComponent;
}
