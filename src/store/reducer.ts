import { MineSweeper } from '@/lib/minesweeper'
import { GameStatus } from '@/types/minesweeper'
import { Action, ActionTypes, ApplicationState } from '@/types/store'

export function reducer(action: Action, currentState: ApplicationState): ApplicationState {
  const clone: ApplicationState = { ...currentState }

  switch(action.type) {
    case ActionTypes.NEW_GAME:
      return {
        ...clone,
        games: [
          ...clone.games,
          {
            ...action.payload,
            uuid: crypto.randomUUID(),
            startedAt: new Date(),
            status: GameStatus.inProgress,
            board: MineSweeper.createBoard(action.payload.difficulty),
          }
        ]
      }
    default:
      return clone
  }
}