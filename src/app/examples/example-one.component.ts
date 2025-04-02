import { Component, inject } from '@angular/core';
import { RandomNumberService } from './random-number.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-example-one',
  imports: [],
  template: `
    <h1>Example 1 - basic polling</h1>
    <section>
      <h2>Random Number: {{ randomNumber() }}</h2>
      <p>
        This example shows how to poll a random number API every 5 seconds.
        The API returns a random number between 1 and 10.
      </p>
      <p>
        The polling stops when the component is destroyed.
      </p>
    </section>
  `,
  styles: ``
})
export class ExampleOneComponent {
  readonly randomNumberService = inject(RandomNumberService);
  readonly randomNumber = toSignal(
    this.randomNumberService.pollRandomNumber()
  )
}
