import { Difficulty, Game } from '@/types/minesweeper'

export type Observer = HTMLElement & { render: () => void }

export enum ApplicationContainers {
  MENU = 'MENU',
  BOARD = 'BOARD'
}

export enum ActionTypes {
  NEW_GAME = 'NEW_GAME',
  REMOVE_GAME = 'REMOVE_GAME',
  PLACE_FLAG = 'PLACE_FLAG',
  REVEAL_TILE = 'REVEAL_TILE',
  CHANGE_ACTIVE_CONTAINER = 'CHANGE_ACTIVE_CONTAINER',
  CHANGE_ACTIVE_GAME = 'CHANGE_ACTIVE_GAME',
  CHANGE_ACTIVE_TILE = 'CHANGE_ACTIVE_TILE',
  CHANGE_ACTIVE_MENU_ITEM = 'CHANGE_ACTIVE_MENU_ITEM',
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

export interface ChangeActiveContainerAction {
  type: ActionTypes.CHANGE_ACTIVE_CONTAINER;
  payload: {
    container: ApplicationContainers;
  }
}

export interface ChangeActiveGameAction {
  type: ActionTypes.CHANGE_ACTIVE_GAME;
  payload: {
    gameUUID: string;
  }
}

export interface ChangeActiveTileAction {
  type: ActionTypes.CHANGE_ACTIVE_TILE;
  payload: {
    row: number;
    col: number;
  }
}

export type Action = AddGameAction | PlaceFlagAction | RevealTileAction | RemoveGameAction |
  ChangeActiveContainerAction | ChangeActiveGameAction | ChangeActiveTileAction

export interface ApplicationState {
  games: Game[];
  highestScoreGame?: {
    game: Game;
    score: number;
  };
  activeContainer: ApplicationContainers;
  activeGame?: string;
  activeTile?: {
    row: number;
    col: number;
  }
}