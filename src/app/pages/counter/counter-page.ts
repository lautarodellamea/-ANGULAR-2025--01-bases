import { Component, signal } from '@angular/core';

@Component({
  // template: `
  //   <h1>Counter</h1>
  //   <h2>{{ counter() }}</h2>
  //   <button (click)="increment(1)">Incrementar</button>
  //   <button (click)="increment(-1)">Decrementar</button>
  //   <button (click)="reset()">Reset</button>
  // `,

  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
export class CounterPage {
  protected readonly title = signal('counter');
  protected counter = signal(0);

  protected increment(value: number) {
    this.counter.set(this.counter() + value);
  }

  protected reset() {
    this.counter.set(0);
  }
}
