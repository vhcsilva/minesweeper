import { Action, ActionTypes, ApplicationState } from '@/types/store'

export function reducer(action: Action, currentState: ApplicationState): ApplicationState {
  const clone: ApplicationState = JSON.parse(JSON.stringify(currentState))

  switch(action.type) {
    case ActionTypes.NEW_GAME:
      return {
        ...clone,
        games: [
          ...clone.games,
          { id: crypto.randomUUID(), ...action.payload }
        ]
      }
    default:
      return clone
  }
}