import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  images: string[];
  counter: number = 0;
  constructor() {
    this.images = [
      'assets/img/0.jpg',
      'assets/img/1.jpg',
      'assets/img/2.jpg',
      'assets/img/3.jpg',
      'assets/img/4.jpg',
    ]
  }

  public slide(nextBack: string): void {
    const maxSlide: number = this.images.length - 1;

    if(nextBack === 'next') {
      this.counter = (this.counter < maxSlide) ? this.counter + 1 : 0;
    }
    if (nextBack === 'back') {
      this.counter =  (this.counter <= 0) ? maxSlide : this.counter - 1;
    }
  }

  @HostListener('document:keydown', ['$event'])
  arrowSlide(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.slide('next')
    }
    if (event.key === 'ArrowLeft') {
      this.slide('back')
    }
  }
}
