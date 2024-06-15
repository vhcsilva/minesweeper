import { Difficulty, Game } from '@/types/minesweeper'

export type Observer = HTMLElement & { render: () => void }

export enum ActionTypes {
  NEW_GAME = 'NEW_GAME'
}

export interface AddGameAction {
  type: ActionTypes.NEW_GAME;
  payload: {
    name: string;
    difficulty: Difficulty;
  }
}

export type Action =AddGameAction

export interface ApplicationState {
  games: Game[];
}