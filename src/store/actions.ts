import { Difficulty } from '@/types/minesweeper'
import { ActionTypes, AddGameAction, PlaceFlagAction, RevealTileAction } from '@/types/store'

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