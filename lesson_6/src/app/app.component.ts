import { Component } from '@angular/core';
import { ProductsService} from "./products.service";
import { NumbersService} from "./numbers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson_6';
  products: string[];
  search:string;
  numbers: number[];
  maxNumber: number | null;

  constructor(private productsService: ProductsService, private numbersService: NumbersService) {
    this.products = this.productsService.getProducts();
    this.numbers = this.numbersService.getNumbers();
    this.search = '';
    this.maxNumber = null;

    console.log("Numbers", this.numbers)
  }

  filterProducts(search: string): void {
    this.products = this.productsService.filterProducts(search);
  }

  sortNumbers(isDesc: boolean) {
    this.numbers = this.numbersService.sortNumbers(isDesc);
  }

  getMaxNumber() {
    this.maxNumber = this.numbersService.maxNumber();
  }

}
