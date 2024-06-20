import template from '@/components/GameTile/GameTile.template.html'
import styles from '@/components/GameTile/GameTile.css'
import BombIcon from '../../../assets/icons/bomb.svg'

import { loadCSS } from '@/utils/load-css'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'
import { isTrue } from '@/lib/boolean'

export class GameTile extends HTMLElement {
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
    return ['tile-mine-count', 'tile-row', 'tile-col', 'tile-has-flag', 'tile-is-mine', 'tile-is-revealed']
  }

  attributeChangedCallback(prop: string, _: unknown, value: string) {
    const changedAttribute = prop.replace('tile-', '')

    switch(changedAttribute) {
      case 'mine-count':
        this.mineCount = Number(value)
      case 'row':
        this.mineCount = Number(value)
      case 'col':
        this.mineCount = Number(value)
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

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    if (this.isMine) {
      const tile = getFromShadowById(this, 'game-tile')
      tile.innerHTML = BombIcon
    }
  }
}

customElements.define('app-game-tile', GameTile)