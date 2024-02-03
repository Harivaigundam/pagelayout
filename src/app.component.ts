import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  name = 'Angular';
}
