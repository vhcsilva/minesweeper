import { MineSweeper } from '@/lib/minesweeper'

export enum Difficulty {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
}

export interface Game {
  uuid: string;
  name: string;
  difficulty: Difficulty
  startedAt: Date
  minesweeper: MineSweeper
}