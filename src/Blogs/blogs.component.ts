import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'blogs-app',
  templateUrl: './blogs.component.html',
})
export class BlogsComp {
  name = 'Angular';
}
