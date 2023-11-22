import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent {

  desc: string = "";
  products = [
    {"id": 1, "name": "Ноутбук HP Pavilion 15", "price": 24999, "description": "HP Pavilion 15 - потужний ноутбук з великим екраном."},
    {"id": 2, "name": "Смартфон iPhone 13", "price": 35999, "description": "iPhone 13 - остання модель смартфону від Apple з потужною камерою."},
    {"id": 3, "name": "Телевізор Samsung QLED Q60A", "price": 18999, "description": "Samsung QLED Q60A - телевізор з яскравим і чітким зображенням."},
    {"id": 4, "name": "Навушники Sony WH-1000XM4", "price": 8999, "description": "Sony WH-1000XM4 - бездротові навушники з активним шумозаглушенням."},
    {"id": 5, "name": "Фотоапарат Canon EOS R6", "price": 79999, "description": "Canon EOS R6 - дзеркальний фотоапарат з високою роздільною здатністю."},
    {"id": 6, "name": "Кавоварка De'Longhi Magnifica S", "price": 13999, "description": "De'Longhi Magnifica S - кавоварка для приготування кави."},
    {"id": 7, "name": "Ігрова консоль PlayStation 5", "price": 18999, "description": "PlayStation 5 - нове покоління ігрової консолі від Sony."},
    {"id": 8, "name": "Ноутбук Apple MacBook Air", "price": 33999, "description": "MacBook Air - легкий та потужний ноутбук від Apple."},
    {"id": 9, "name": "Смартфон Xiaomi Redmi Note 10", "price": 6999, "description": "Xiaomi Redmi Note 10 - доступний та функціональний смартфон."},
    {"id": 10, "name": "Телевізор LG OLED C1", "price": 29999, "description": "LG OLED C1 - телевізор з глибокими чорними кольорами."},
    {"id": 11, "name": "Навушники Bose QuietComfort 45", "price": 12999, "description": "Bose QuietComfort 45 - комфортні навушники із звукозаглушенням."},
    {"id": 12, "name": "Фотоапарат Nikon Z6 II", "price": 49999, "description": "Nikon Z6 II - бездзеркальний фотоапарат з високою швидкістю затвора."},
    {"id": 13, "name": "Кавоварка Philips Series 3200", "price": 8999, "description": "Philips Series 3200 - автоматична кавоварка з молочним кулером."},
    {"id": 14, "name": "Ігрова консоль Xbox Series X", "price": 20999, "description": "Xbox Series X - потужна ігрова консоль від Microsoft."},
    {"id": 15, "name": "Ноутбук Lenovo ThinkPad X1 Carbon", "price": 45999, "description": "Lenovo ThinkPad X1 Carbon - надійний бізнес-ноутбук."},
    {"id": 16, "name": "Смартфон OnePlus 9 Pro", "price": 29999, "description": "OnePlus 9 Pro - швидкий та функціональний смартфон."},
    {"id": 17, "name": "Телевізор Sony BRAVIA XR A80J", "price": 42999, "description": "Sony BRAVIA XR A80J - телевізор з вражаючою якістю зображення."},
    {"id": 18, "name": "Навушники JBL Quantum 800", "price": 8999, "description": "JBL Quantum 800 - гарнітур для ігор з високоякісним звуком."},
    {"id": 19, "name": "Фотоапарат Sony Alpha 7 III", "price": 89999, "description": "Sony Alpha 7 III - повнокадровий бездзеркальний фотоапарат."},
    {"id": 20, "name": "Кавоварка Saeco Incanto", "price": 29999, "description": "Saeco Incanto - автоматична кавоварка з можливістю приготування капучіно."}
  ];

  handleShowDetails(id: number) {
    this.desc = this.products.filter((product) => product.id === id)[0].description

  }


}
