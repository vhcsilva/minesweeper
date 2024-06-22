import { MineSweeper } from '@/lib/minesweeper'
import { GameStatus } from '@/types/minesweeper'
import { Action, ActionTypes, ApplicationState } from '@/types/store'

export function reducer(action: Action, currentState: ApplicationState): ApplicationState {
  let clone: ApplicationState = structuredClone(currentState)

  if (action.type === ActionTypes.NEW_GAME) {
    clone.games.push({
      ...action.payload,
      uuid: crypto.randomUUID(),
      startedAt: new Date(),
      status: GameStatus.inProgress,
      board: MineSweeper.createBoard(action.payload.difficulty),
    })
  } else if (action.type === ActionTypes.REMOVE_GAME) {
    const { gameUUID } = action.payload
    const gameIndex = clone.games.findIndex(({ uuid }) => uuid === gameUUID)
    clone.games.splice(gameIndex, 1)
  } else {
    const { gameUUID, row, col } = action.payload
    const gameIndex = clone.games.findIndex(({ uuid }) => uuid === gameUUID)

    if (action.type === ActionTypes.PLACE_FLAG)
      clone.games[gameIndex].board = MineSweeper.toggleFlag(clone.games[gameIndex].board, row, col)
    else if (action.type === ActionTypes.REVEAL_TILE) {
      const { board, gameOver } = MineSweeper.revealTile(clone.games[gameIndex].board, row, col)

      clone.games[gameIndex].board = board

      if (gameOver)
        clone.games[gameIndex].status = GameStatus.lost
    }
  }

  return clone
}