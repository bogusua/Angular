import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any;

  constructor() {
    this.products = [
      'Телефон: iPhone 13',
      'Телефон: Samsung Galaxy S21',
      'Телефон: Xiaomi Redmi Note 10',
      'Ноутбук: MacBook Pro',
      'Ноутбук: Dell XPS 15',
      'Телефон: OnePlus 9 Pro',
      'Ноутбук: HP Spectre x360',
      'Пилосос: Dyson V11 Absolute',
      'Телефон: Google Pixel 6',
      'Пилосос: iRobot Roomba 980',
      'Телефон: Oppo Find X3 Pro',
      'Пилосос: Shark Navigator Lift-Away',
      'Ноутбук: Asus ROG Zephyrus G14',
      'Телефон: Sony Xperia 1 III',
      'Пилосос: Miele Blizzard CX1'
    ];
  }

  setProducts(data: any) {
    this.products = data;
  }
  getProducts(): string[] {
    return this.products;
  }

  filterProducts(search: string): string[] {
    return this.products.filter((product:string) => product.includes(search))
  }

  filterProductsByName(search: string) {
    return this.products.filter((product: {name: string}) => product.name.includes(search))
  }

  sortByPrice(isDesc: boolean) {
    return (isDesc)
      ? this.products.sort((a: {price: number}, b: {price: number}) => b.price - a.price)
      : this.products.sort((a: {price: number}, b: {price: number}) => a.price - b.price);
  }
}
