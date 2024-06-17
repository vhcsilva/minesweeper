import template from '@/components/GameTile/GameTile.template.html'
import styles from '@/components/GameTile/GameTile.css'
import { loadCSS } from '@/utils/load-css'

export class GameTile extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = template

    loadCSS(this, styles)
  }
}

customElements.define('app-game-tile', GameTile)