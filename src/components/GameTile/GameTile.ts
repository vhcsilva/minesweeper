import template from '@/components/GameTile/GameTile.template.html'
import styles from '@/components/GameTile/GameTile.css'

import { loadCSS } from '@/utils/load-css'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'
import { isTrue } from '@/lib/boolean'
import { dispatch } from '@/store/index'
import { changeActiveContainer, changeActiveGame, changeActiveTile, placeFlag, revealTile } from '@/store/actions'

import BombIcon from '../../../assets/icons/bomb.svg'
import FlagIcon from '../../../assets/icons/flag.svg'
import { GameStatus } from '@/types/minesweeper'
import { useRevealTile, useToggleFlag } from '@/hooks/store'
import { ApplicationContainers } from '@/types/store'

export class GameTile extends HTMLElement {
  gameUUID: string = ''
  gameStatus: GameStatus = GameStatus.inProgress
  mineCount: number = 0
  row: number = 0
  col: number = 0
  hasFlag: boolean = false
  isMine: boolean = false
  isRevealed: boolean = false
  isActive: boolean = false

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['game-uuid', 'game-status', 'tile-mine-count', 'tile-row', 'tile-col', 'tile-has-flag',
      'tile-is-mine', 'tile-is-revealed', 'tile-is-active']
  }

  attributeChangedCallback(prop: string, _: unknown, value: string) {
    const changedAttribute = prop.replace('tile-', '')
    let hasChanged = false

    switch(changedAttribute) {
      case 'game-uuid':
        if (this.gameUUID !== value) {
          this.gameUUID = value
          hasChanged = true
        }
      break
      case 'game-status':
        const newStatus = value === "lost" && GameStatus.lost || value === "win" && GameStatus.win || GameStatus.inProgress
        if (this.gameStatus !== newStatus) {
          this.gameStatus = newStatus
          hasChanged = true
        }
      break
      case 'mine-count':
        if (this.mineCount !== Number(value)) {
          this.mineCount = Number(value)
          hasChanged = true
        }
      break
      case 'row':
        if (this.row !== Number(value)) {
          this.row = Number(value)
          hasChanged = true
        }
      break
      case 'col':
        if (this.col !== Number(value)) {
          this.col = Number(value)
          hasChanged = true
        }
      break
      case 'has-flag':
        if (this.hasFlag !== isTrue(value)) {
          this.hasFlag = isTrue(value)
          hasChanged = true
        }
      break
      case 'is-mine':
        if (this.isMine !== isTrue(value)) {
          this.isMine = isTrue(value)
          hasChanged = true
        }
      break
      case 'is-revealed':
        if (this.isRevealed !== isTrue(value)) {
          this.isRevealed = isTrue(value)
          hasChanged = true
        }
      break
      case 'is-active':
        if (this.isActive !== isTrue(value)) {
          this.isActive = isTrue(value)
          hasChanged = true
        }
      break
    }

    if (hasChanged)
      this.render()
  }

  connectedCallback() {
    this.render()
  }

  updateActiveGameAndTile() {
    dispatch(changeActiveGame(this.gameUUID))
    dispatch(changeActiveTile(this.row, this.col))
    dispatch(changeActiveContainer(ApplicationContainers.BOARD))
  }

  onRevealTile(event: MouseEvent) {
    event.preventDefault()
    useRevealTile(this.gameUUID, this.row, this.col)
    this.updateActiveGameAndTile()
  }

  onToggleFlag(event: MouseEvent) {
    event.preventDefault()
    useToggleFlag(this.gameUUID, this.row, this.col)
    this.updateActiveGameAndTile()
  }

  render() {
    const tileId = `${this.gameUUID};${this.row};${this.col}`

    if (this.shadowRoot) this.shadowRoot.innerHTML = template.replace('[TILE-ID]', tileId)

    loadCSS(this, styles)

    const tile = getFromShadowById(this, tileId)

    if (this.isActive)
      tile?.classList?.add('active')

    tile?.addEventListener('contextmenu', e => this.onToggleFlag(e))

    if (!this.hasFlag) {
      tile?.addEventListener('click', e => this.onRevealTile(e))
    }

    if (this.isMine) {
      if (this.gameStatus === GameStatus.lost || this.isRevealed) {
        tile.classList.add('exploded')
        tile.innerHTML = BombIcon
      } else if (this.hasFlag) {
        tile.innerHTML = FlagIcon
      }
    } else if (this.isRevealed) {
      tile.classList.add('revealed')
      if (this.mineCount > 0)
        tile.textContent = `${this.mineCount}`
    } else if (this.hasFlag) {
      tile.innerHTML = FlagIcon
    }
  }
}

customElements.define('app-game-tile', GameTile)