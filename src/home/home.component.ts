import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
})
export class HomeComp {
  name = 'Angular';
}
