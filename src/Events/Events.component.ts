import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'Events-app',
  templateUrl: './Events.component.html',
})
export class EventsComp {
  name = 'Angular';
}
