import { Component, inject } from '@angular/core';
import { RandomNumberEx3Service } from './random-number-ex-3.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-example-three',
  imports: [],
  template: `
    <h1>Example 3 - PollUntil response meets condition</h1>
    <section>
      <h2>Random Number: {{ randomNumber() }}</h2>
      <p>Polling Status: {{ randomNumberService.pollingStatusSignal() }}</p>
      <p>
        This example shows how to poll a random number API every 5 seconds.
        The API returns a random number between 1 and 10.
      </p>
      <p>
        The polling stops when the random number returned is greater than or equal to 7.
      </p>
  `,
  styles: ``
})
export class ExampleThreeComponent {
  readonly randomNumberService = inject(RandomNumberEx3Service);
  readonly randomNumber = toSignal(
    this.randomNumberService.pollRandomNumber()
  )
}
