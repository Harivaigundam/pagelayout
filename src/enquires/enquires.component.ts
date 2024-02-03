import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'enquires-app',
  templateUrl: './enquires.component.html',
})
export class EnquiresComp {
  name = 'Angular';
}
