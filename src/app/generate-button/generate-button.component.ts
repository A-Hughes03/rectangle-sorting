import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

interface Rectangle {
  id: number;
  x: number;
  y: number;
  height: number;
  width: number;
}

@Component({
  selector: 'app-generate-button',
  template: `
    <button mat-raised-button>Sort Rectangles</button>
  `,
  styleUrls: ['./generate-button.component.css']
})
export class GenerateButtonComponent {

}
