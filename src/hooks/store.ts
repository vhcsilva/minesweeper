import { placeFlag, revealTile } from '@/store/actions'
import { applicationState, dispatch } from '@/store/index'
import { GameStatus } from '@/types/minesweeper'

export function useRevealTile(gameUUID: string, row: number, col: number): boolean {
  const game = applicationState.games.find(({ uuid }) => uuid === gameUUID)

  if (game?.status !== GameStatus.inProgress) return false

  dispatch(revealTile(gameUUID, row, col))

  return true
}

export function useToggleFlag(gameUUID: string, row: number, col: number): boolean {
  const game = applicationState.games.find(({ uuid }) => uuid === gameUUID)

  if (game?.status !== GameStatus.inProgress) return false

  dispatch(placeFlag(gameUUID, row, col))

  return true
}