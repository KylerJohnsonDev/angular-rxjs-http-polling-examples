import { Component, inject } from '@angular/core';
import { RandomNumberEx2Service } from './random-number-ex-2.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-example-two',
  imports: [],
  template: `
    <h1>Example 2 - Start/Stop polling</h1>
    <section>
      <h2>Random Number: {{ randomNumberService.randomNumberSignal() }}</h2>
      <p>Polling status: {{ randomNumberService.pollingStatusSignal() }}</p>
      <div>
        <button (click)="randomNumberService.startPolling(5000)">
          Start Polling
        </button>
        <button (click)="randomNumberService.stopPolling()">
          Stop Polling
        </button>
      </div>
      <p>
        This example shows how to start and stop polling a random number API
        every 5 seconds. The API returns a random number between 1 and 10.
      </p>
      <p>
        The polling stops when the component is destroyed.
      </p>
  `,
  styles: ``
})
export class ExampleTwoComponent {
  readonly randomNumberService = inject(RandomNumberEx2Service);
}
