import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() status: string = 'empty';

  constructor() { }

  onClick() {
    if (this.status === 'empty') {
      this.status = 'occupied'; 
    }
  }
}