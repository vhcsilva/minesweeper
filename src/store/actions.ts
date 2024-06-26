import { Difficulty } from '@/types/minesweeper'
import {
  ActionTypes,
  AddGameAction,
  ApplicationContainers,
  ChangeActiveContainerAction,
  ChangeActiveGameAction,
  ChangeActiveTileAction,
  ChangeSortAction,
  PlaceFlagAction,
  RemoveGameAction,
  RevealTileAction,
  SortOptions
} from '@/types/store'

export function addNewGame(name: string, difficulty: Difficulty): AddGameAction {
  return {
    type: ActionTypes.NEW_GAME,
    payload:{ name, difficulty }
  }
}

export function placeFlag(gameUUID: string, row: number, col: number): PlaceFlagAction {
  return {
    type: ActionTypes.PLACE_FLAG,
    payload:{ gameUUID, row, col }
  }
}

export function revealTile(gameUUID: string, row: number, col: number): RevealTileAction {
  return {
    type: ActionTypes.REVEAL_TILE,
    payload:{ gameUUID, row, col }
  }
}

export function removeGame(gameUUID: string): RemoveGameAction {
  return {
    type: ActionTypes.REMOVE_GAME,
    payload:{ gameUUID }
  }
}

export function changeActiveContainer(container: ApplicationContainers): ChangeActiveContainerAction {
  return {
    type: ActionTypes.CHANGE_ACTIVE_CONTAINER,
    payload: { container }
  }
}

export function changeActiveGame(gameUUID: string): ChangeActiveGameAction {
  return {
    type: ActionTypes.CHANGE_ACTIVE_GAME,
    payload: { gameUUID }
  }
}

export function changeActiveTile(row: number, col: number): ChangeActiveTileAction {
  return {
    type: ActionTypes.CHANGE_ACTIVE_TILE,
    payload: { row, col }
  }
}

export function changeSortedBy(sort: SortOptions): ChangeSortAction {
  return {
    type: ActionTypes.CHANGE_SORT,
    payload: { sort }
  }
}