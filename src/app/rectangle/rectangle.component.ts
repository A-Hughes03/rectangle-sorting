import { Component, OnInit } from '@angular/core';

interface Rectangle {
  id: number;
  x: number;
  y: number;
  height: number;
  width: number;
}

@Component({
  selector: 'app-rectangle',
  template: `
    <svg width="1520" height="700">
      <rect *ngFor="let rectangle of rectangles;" [attr.x]="rectangle.x" [attr.y]="700 - rectangle.height" [attr.height]="rectangle.height" [attr.width]="rectangle.width" />
    </svg>
  `,
  styleUrls: ['./rectangle.component.css']
})

export class RectangleComponent implements OnInit {
  rectangles: Rectangle[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 152; i++) {
      this.rectangles.push({
        id: i,
        x: i * 10,
        y: 700 - Math.random() * 700,
        height: Math.random() * 700,
        width: 10
      });
    }
  }
}
