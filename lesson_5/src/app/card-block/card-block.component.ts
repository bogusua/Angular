import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent {
  displayPrice = 0;

  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() productId: number = 0;

  @Output() moreDetailsEvent = new EventEmitter<number>();

  ngOnInit() {
    this.displayPrice = this.price;
  }

  showDetails(productId: number) {
    this.moreDetailsEvent.emit(productId);
  }
}
