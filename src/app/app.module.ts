import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    GameComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AppModule { }