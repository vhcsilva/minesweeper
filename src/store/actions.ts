import { Difficulty } from '@/types/minesweeper'
import { ActionTypes, AddGameAction } from '@/types/store'

export function addNewGame(name: string, difficulty: Difficulty): AddGameAction {
  return {
    type: ActionTypes.NEW_GAME,
    payload:{ name, difficulty }
  }
}