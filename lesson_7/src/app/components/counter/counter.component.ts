import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy {
  counter = 0;
  isRunning = false;
  private subscription: Subscription | undefined;

  startCounter(): void {
    this.isRunning = true;
    this.subscription = interval(1000).subscribe(() => {
      this.counter++;
    });
  }

  stopCounter(): void {
    this.isRunning = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  resetCounter(): void {
    this.isRunning = false;
    this.counter = 0;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
