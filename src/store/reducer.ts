import { getDifferenceInSeconds } from '@/lib/date'
import { MineSweeper } from '@/lib/minesweeper'
import { GameStatus } from '@/types/minesweeper'
import { Action, ActionTypes, ApplicationState, SortOptions } from '@/types/store'

export function reducer(action: Action, currentState: ApplicationState): ApplicationState {
  let clone: ApplicationState = structuredClone(currentState)

  if (action.type === ActionTypes.CHANGE_SORT) {
    clone.sortedBy = action.payload.sort
    clone.games = clone.games.sort((game, nextGame) => {
      const order = action.payload.sort === SortOptions.NEWEST ? -1 : 1

      if (game.startedAt > nextGame.startedAt)
        return order
      else if (game.startedAt < nextGame.startedAt)
        return order * -1

      return 0
    })
  } else if (action.type === ActionTypes.CHANGE_ACTIVE_TILE) {
    clone.activeTile = { row: action.payload.row, col: action.payload.col }
  } else if (action.type === ActionTypes.CHANGE_ACTIVE_GAME) {
    clone.activeGame = action.payload.gameUUID
    clone.activeTile = { row: 0, col: 0 }
  } else if (action.type === ActionTypes.CHANGE_ACTIVE_CONTAINER) {
    clone.activeContainer = action.payload.container
  } else if (action.type === ActionTypes.NEW_GAME) {
    const newUUID = crypto.randomUUID()
    clone.activeGame = newUUID
    clone.activeTile = { row: 0, col: 0 }
    const newGame = {
      ...action.payload,
      uuid: newUUID,
      startedAt: new Date(),
      status: GameStatus.inProgress,
      board: MineSweeper.createBoard(action.payload.difficulty),
    }
    if (clone.sortedBy === SortOptions.NEWEST)
      clone.games.unshift(newGame)
    else
      clone.games.push(newGame)
  } else if (action.type === ActionTypes.REMOVE_GAME) {
    const { gameUUID } = action.payload
    const gameIndex = clone.games.findIndex(({ uuid }) => uuid === gameUUID)
    clone.games.splice(gameIndex, 1)
  } else {
    const { gameUUID, row, col } = action.payload
    const gameIndex = clone.games.findIndex(({ uuid }) => uuid === gameUUID)

    if (clone.games[gameIndex].status === GameStatus.inProgress) {
      if (action.type === ActionTypes.PLACE_FLAG)
        clone.games[gameIndex].board = MineSweeper.toggleFlag(clone.games[gameIndex].board, row, col)
      else if (action.type === ActionTypes.REVEAL_TILE) {
        const { board, status } = MineSweeper.revealTile(clone.games[gameIndex].board, row, col)

        clone.games[gameIndex].board = board
        clone.games[gameIndex].status = status

        if (status !== GameStatus.inProgress)
          clone.games[gameIndex].finishedAt = new Date()

        if (status === GameStatus.win) {
          const game = clone.games[gameIndex]
          const score = getDifferenceInSeconds(game.startedAt, game.finishedAt!)

          if (!clone?.highestScoreGame?.score || score < clone?.highestScoreGame?.score)
            clone.highestScoreGame = {
              game,
              score
            }

        }
      }
    }
  }

  return clone
}