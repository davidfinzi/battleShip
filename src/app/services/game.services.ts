import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  rows: number = 10;
  cols: number = 10;

  placeShips(board: any[][], totalShips: number) {
    let shipsPlaced = 0;
    const rows = this.rows;
    const cols = this.cols;

    while (shipsPlaced < totalShips) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);

      if (board[row][col].status === 'empty') {
        board[row][col].status = 'ship';
        shipsPlaced++;
      }
    }
  }

  attackCell(board: any[][], row: number, col: number): string {
    const clickedCell = board[row][col];

    if (clickedCell.status === 'ship') {
      clickedCell.status = 'hit';
      return 'hit';
    } else if (clickedCell.status === 'empty') {
      clickedCell.status = 'miss';
      return 'miss';
    } else {
      return 'alreadyAttacked';
    }
  }

  checkGameOver(board: any[][]): boolean {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (board[i][j].status === 'ship') {
          return false;
        }
      }
    }
    return true;
  }
}