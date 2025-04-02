import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleOneComponent } from './examples/example-one.component';

@Component({
  selector: 'app-root',
  imports: [ExampleOneComponent],
  template: `
    <app-example-one />
    <hr />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-rxjs-http-polling';
}
