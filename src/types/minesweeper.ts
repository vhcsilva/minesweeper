import { MineSweeper } from '@/lib/minesweeper'

export enum GameStatus {
  win = 'win',
  lost = 'lost',
  inProgress = 'in-progress'
}

export enum Difficulty {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
}

export interface Tile {
  mineCount: number;
  row: number;
  col: number;
  hasFlag: boolean;
  isMine: boolean;
  isRevealed: boolean;
}

export interface Board {
  rows: number;
  cols: number;
  mines: number;
  flags: number;
  revealed: number;
  tiles: Tile[][];
}

export interface Game {
  uuid: string;
  name: string;
  difficulty: Difficulty;
  startedAt: Date;
  status: GameStatus;
  board: Board;
}