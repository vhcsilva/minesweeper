import { MineSweeper } from '@/lib/minesweeper'
import { Action, ActionTypes, ApplicationState } from '@/types/store'

export function reducer(action: Action, currentState: ApplicationState): ApplicationState {
  const clone: ApplicationState = JSON.parse(JSON.stringify(currentState))

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
            minesweeper: new MineSweeper(action.payload.difficulty)
          }
        ]
      }
    default:
      return clone
  }
}