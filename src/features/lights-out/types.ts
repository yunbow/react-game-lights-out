export interface Position {
  row: number;
  col: number;
}

export interface GameState {
  board: boolean[][];
  moves: number;
  isWon: boolean;
}