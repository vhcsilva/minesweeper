import template from '@/components/GameTile/GameTile.template.html'
import styles from '@/components/GameTile/GameTile.css'

import { loadCSS } from '@/utils/load-css'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'
import { isTrue } from '@/lib/boolean'
import { dispatch } from '@/store/index'
import { placeFlag, revealTile } from '@/store/actions'

import BombIcon from '../../../assets/icons/bomb.svg'
import FlagIcon from '../../../assets/icons/flag.svg'

export class GameTile extends HTMLElement {
  gameUUID: string = ''
  mineCount: number = 0
  row: number = 0
  col: number = 0
  hasFlag: boolean = false
  isMine: boolean = false
  isRevealed: boolean = false

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['game-uuid', 'tile-mine-count', 'tile-row', 'tile-col', 'tile-has-flag', 'tile-is-mine', 'tile-is-revealed']
  }

  attributeChangedCallback(prop: string, _: unknown, value: string) {
    const changedAttribute = prop.replace('tile-', '')

    switch(changedAttribute) {
      case 'game-uuid':
        this.gameUUID = value
      case 'mine-count':
        this.mineCount = Number(value)
      case 'row':
        this.row = Number(value)
      case 'col':
        this.col = Number(value)
      case 'has-flag':
        this.hasFlag = isTrue(value)
      case 'is-mine':
        this.isMine = isTrue(value)
      case 'is-revealed':
        this.isRevealed = isTrue(value)
    }

    this.render()
  }

  connectedCallback() {
    this.render()
  }

  onRevealTile(event: MouseEvent) {
    event.preventDefault();
    dispatch(revealTile(this.gameUUID, this.row, this.col))
  }

  onToggleFlag(event: MouseEvent) {
    event.preventDefault();
    dispatch(placeFlag(this.gameUUID, this.row, this.col))
  }

  render() {
    const tileId = `${this.gameUUID};${this.row};${this.col}`

    if (this.shadowRoot) this.shadowRoot.innerHTML = template.replace('[TILE-ID]', tileId)

    loadCSS(this, styles)

    const tile = getFromShadowById(this, tileId)

    tile?.addEventListener('contextmenu', e => this.onToggleFlag(e))

    if (!this.hasFlag) {
      tile?.addEventListener('click', e => this.onRevealTile(e))
    }

    if (this.isRevealed) {
      if (this.isMine) {
        tile.classList.add('exploded')
        tile.innerHTML = BombIcon
      } else {
        tile.classList.add('revealed')
        if (this.mineCount > 0)
          tile.textContent = `${this.mineCount}`
      }
    } else if (this.hasFlag) {
      tile.innerHTML = FlagIcon
    }
  }
}

customElements.define('app-game-tile', GameTile)