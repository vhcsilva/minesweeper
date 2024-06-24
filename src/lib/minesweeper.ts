import { Board, Difficulty, GameStatus } from '@/types/minesweeper'
import { GameLayout } from '@/utils/constants'

export class MineSweeper {
  static createBoard(difficulty: Difficulty): Board {
    const { rows, cols, mines } = GameLayout[difficulty]

    return MineSweeper.initializeBoard({
      rows,
      cols,
      mines,
      flags: 0,
      revealed: 0,
      tiles: []
    })
  }

  static initializeBoard(board: Board): Board {
    return MineSweeper.fillMineCount(MineSweeper.placeMines(MineSweeper.fillWithDefault(board)));
  }

  static fillWithDefault(board: Board): Board {
    for (let row = 0; row < board.rows; row++) {
      board.tiles[row] = []

      for (let col = 0; col < board.cols; col++) {
        board.tiles[row][col] = {
          isMine: false,
          isRevealed: false,
          hasFlag: false,
          mineCount: 0,
          row,
          col
        }
      }
    }

    return board
  }

  static placeMines(board: Board): Board {
    let minesPlaced = 0

    while (minesPlaced < board.mines) {
      const row = Math.floor(Math.random() * board.rows)
      const col = Math.floor(Math.random() * board.cols)

      if (board.tiles[row][col].isMine) continue

      board.tiles[row][col].isMine = true
      minesPlaced++
    }

    return board
  }

  static fillMineCount(board: Board): Board {
    for (let row = 0; row < board.rows; row++) {
      for (let col = 0; col < board.cols; col++) {
        if (board.tiles[row][col].isMine)
          continue

        let count = 0

        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const nRow = row + dx
            const nCol = col + dy

            if (nRow >= 0 && nRow < board.rows && nCol >= 0 && nCol < board.cols && board.tiles[nRow][nCol].isMine)
              count++
          }
        }

        board.tiles[row][col].mineCount = count
      }
    }

    return board
  }

  static toggleFlag(board: Board, row: number, col: number): Board {
    const tile = MineSweeper.getTile(board, row, col)

    if (!tile || !!tile?.isRevealed) return board

    const changedFlag = !board.tiles[row][col].hasFlag

    if (changedFlag && board.flags === board.mines || !changedFlag && board.flags === 0) return board

    if (changedFlag)
      board.flags++
    else
      board.flags--

    board.tiles[row][col].hasFlag = changedFlag

    return board
  }

  static revealTile(board: Board, row: number, col: number): { board: Board, status: GameStatus } {
    const tile = MineSweeper.getTile(board, row, col)

    if (!tile || tile?.isRevealed)
      return { board: board, status: GameStatus.inProgress }

    board.tiles[row][col].isRevealed = true
    board.revealed++

    if (tile.isMine)
      return { board: board, status: GameStatus.lost }
    else if (tile.mineCount === 0) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          MineSweeper.revealTile(board, row + dx, col + dy)
        }
      }
    }

    const isWin = board.revealed === (board.rows * board.cols - board.mines)

    return { board: board, status: isWin ? GameStatus.win : GameStatus.inProgress }
  }

  static getTile(board: Board, row: number, col: number) {
    if (row < 0 || row >= board.rows || col < 0 || col >= board.cols)
      return null

    return board.tiles[row][col]
  }
}