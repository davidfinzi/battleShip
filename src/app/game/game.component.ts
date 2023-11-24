import { Component } from '@angular/core';
import { GameService } from '../services/game.services';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  rows: number = 10;
  cols: number = 10;
  board: any[][] = [];
  gameStarted: boolean = false;
  gameOver: boolean = false;
  shipsPlaced: number = 0;
  totalShips: number = 10;

  constructor(private gameService: GameService) {
    this.initializeBoard();
    this.placeShips();
  }

  initializeBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.board[i][j] = { status: 'empty' };
      }
    }
  }

  placeShips() {
    while (this.shipsPlaced < this.totalShips) {
      const row = Math.floor(Math.random() * this.rows);
      const col = Math.floor(Math.random() * this.cols);

      if (this.board[row][col].status === 'empty') {
        this.board[row][col].status = 'ship';
        this.shipsPlaced++;
      }
    }
  }

  handleCellClick(row: number, col: number) {
    if (!this.gameStarted) {
      this.gameStarted = true;
    }

    if (!this.gameOver) {
      const clickedCell = this.board[row][col];

      if (clickedCell.status === 'ship') {
        clickedCell.status = 'hit';
        this.checkGameOver();
      } else if (clickedCell.status === 'empty') {
        clickedCell.status = 'miss';
      }
    }
  }

  checkGameOver() {
    let shipsRemaining = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.board[i][j].status === 'ship') {
          shipsRemaining++;
        }
      }
    }

    if (shipsRemaining === 0) {
      this.gameOver = true;
    }
  }

  restartGame() {
    this.gameStarted = false;
    this.gameOver = false;
    this.shipsPlaced = 0;
    this.initializeBoard();
    this.placeShips();
  }
}