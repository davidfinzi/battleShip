import { Component } from '@angular/core';

enum CellStatus {
  Empty = 'empty',
  Ship = 'ship',
  Hit = 'hit',
  Miss = 'miss'
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  rows: any[][] = [];
  shipCount = 10;

  constructor() {
    this.initializeBoard();
    this.placeShips();
  }

  initializeBoard() {
    for (let i = 0; i < 10; i++) {
      this.rows[i] = [];
      for (let j = 0; j < 10; j++) {
        this.rows[i][j] = { status: CellStatus.Empty };
      }
    }
  }

  placeShips() {
    let placedShips = 0;
    while (placedShips < this.shipCount) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);

      if (this.rows[row][col].status === CellStatus.Empty) {
        this.rows[row][col].status = CellStatus.Ship;
        placedShips++;
      }
    }
  }

  handleCellClick(row: number, col: number) {
    const clickedCell = this.rows[row][col];

    if (clickedCell.status === CellStatus.Ship) {
      clickedCell.status = CellStatus.Hit;
    } else if (clickedCell.status === CellStatus.Empty) {
      clickedCell.status = CellStatus.Miss;
    }
  }
}