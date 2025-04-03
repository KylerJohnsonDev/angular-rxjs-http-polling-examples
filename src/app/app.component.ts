import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleOneComponent } from './examples/example-one/example-one.component';
import { ExampleTwoComponent } from "./examples/example-two/example-two.component";
import { ExampleThreeComponent } from "./examples/example-three/example-three.component";

@Component({
  selector: 'app-root',
  imports: [ExampleOneComponent, ExampleTwoComponent, ExampleThreeComponent],
  template: `
    <app-example-one />
    <hr />
    <app-example-two />
    <hr />
    <app-example-three />
  `,
})
export class AppComponent {
  title = 'angular-rxjs-http-polling';
}
