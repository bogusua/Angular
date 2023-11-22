import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent {
  displayPrice = 0;

  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() id: number = 0;

  @Output() moreDetailsEvent = new EventEmitter<number>();

  @ViewChild('productBlock') pBlock!: ElementRef;

  ngOnInit() {
    this.displayPrice = this.price;
  }

  showDetails(productId: number) {
    this.moreDetailsEvent.emit(productId);
  }

  ngAfterViewInit() {
    const bTag: HTMLBRElement | null = this.pBlock.nativeElement.querySelector('b');
    if (bTag) {
      this.pBlock.nativeElement.style.backgroundColor = bTag.innerText;
    }
  }
}
