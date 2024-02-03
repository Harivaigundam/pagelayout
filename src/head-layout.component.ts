import { Component } from '@angular/core';

import 'zone.js';

@Component({
  selector: 'head-comp',
  templateUrl: './head-layout.component.html',
  styleUrl: './head-layout.component.css',
})
export class HeaderComp {
  name = 'Angular';
}
