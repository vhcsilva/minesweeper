import { Difficulty, Game } from '@/types/minesweeper'

export type Observer = HTMLElement & { render: () => void }

export enum ActionTypes {
  NEW_GAME = 'NEW_GAME',
  REMOVE_GAME = 'REMOVE_GAME',
  PLACE_FLAG = 'PLACE_FLAG',
  REVEAL_TILE = 'REVEAL_TILE'
}

export interface AddGameAction {
  type: ActionTypes.NEW_GAME;
  payload: {
    name: string;
    difficulty: Difficulty;
  }
}

export interface PlaceFlagAction {
  type: ActionTypes.PLACE_FLAG;
  payload: {
    gameUUID: string;
    row: number;
    col: number;
  }
}

export interface RevealTileAction {
  type: ActionTypes.REVEAL_TILE;
  payload: {
    gameUUID: string;
    row: number;
    col: number;
  }
}

export interface RemoveGameAction {
  type: ActionTypes.REMOVE_GAME;
  payload: {
    gameUUID: string;
  }
}

export type Action = AddGameAction | PlaceFlagAction | RevealTileAction | RemoveGameAction

export interface ApplicationState {
  games: Game[];
}