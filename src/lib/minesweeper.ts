import { GameOverError } from '@/types/errors'
import { Difficulty } from '@/types/minesweeper'
import { GameLayout } from '@/utils/constants'

export interface Tile {
  mineCount: number;
  row: number;
  col: number;
  hasFlag: boolean;
  isMine: boolean;
  isRevealed: boolean;
}

export class MineSweeper {
  private colsNumber: number
  private rowsNumber: number
  private minesNumber: number
  private board: Tile[][]

  constructor(readonly difficulty: Difficulty) {
    const { rows, cols, mines } = GameLayout[difficulty]

    this.rowsNumber = rows
    this.colsNumber = cols
    this.minesNumber = mines
    this.board = []

    this.initializeBoard()
  }

  initializeBoard() {
    this.fillWithDefault()
    this.placeMines()
    this.fillMineCount()
  }

  fillWithDefault() {
    for (let row = 0; row < this.rowsNumber; row++) {
      this.board[row] = []

      for (let col = 0; col < this.colsNumber; col++) {
        this.board[row][col] = {
          isMine: false,
          isRevealed: false,
          hasFlag: false,
          mineCount: 0,
          row,
          col
        }
      }
    }
  }

  placeMines() {
    let minesPlaced = 0

    while (minesPlaced < this.minesNumber) {
      const row = Math.floor(Math.random() * this.rowsNumber)
      const col = Math.floor(Math.random() * this.colsNumber)

      if (this.board[row][col].isMine) return

      this.board[row][col].isMine = true
      minesPlaced++
    }
  }

  fillMineCount() {
    for (let row = 0; row < this.rowsNumber; row++) {
      for (let col = 0; col < this.colsNumber; col++) {
        if (this.board[row][col].isMine)
          continue

        let count = 0

        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const nRow = row + dx
            const nCol = col + dy

            if (nRow >= 0 && nRow < this.rowsNumber && nCol >= 0 && nCol < this.colsNumber && this.board[nRow][nCol].isMine)
              count++
          }
        }

        this.board[row][col].mineCount = count
      }
    }
  }

  toggleFlag(row: number, col: number) {
    const tile = this.getTile(row, col)

    if (!tile || !!tile?.isRevealed) return

    this.board[row][col].hasFlag = !this.board[row][col].hasFlag
  }

  revealTile(row: number, col: number) {
    const tile = this.getTile(row, col)

    if (!tile) return

    this.board[row][col].isRevealed = true

    if (tile.isMine)
      throw new GameOverError()

    if (tile.mineCount === 0) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          this.revealTile(row + dx, row + dy)
        }
      }
    }
  }

  getTile(row: number, col: number) {
    if (row < 0 || row >= this.rowsNumber || col < 0 || col >= this.colsNumber)
      return null

    return this.board[row][col]
  }
}