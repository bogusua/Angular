import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  numbers: number[];

  constructor() {
    this.numbers = [ 8, 5, 9, 12, 45, 23, 65, 4, 28 ]
  }

  getNumbers(): number[] {
    return this.numbers;
  }

  sortNumbers(isDesc: boolean): number[] {
    return (isDesc)
      ? this.numbers.sort((a, b) => b - a)
      : this.numbers.sort((a, b) => a - b);
  }

  maxNumber() {
    return Math.max(...this.numbers);
  }
}
