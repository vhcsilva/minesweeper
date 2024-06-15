import { applicationState, subscribe } from '@/store/index'

export class Board extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    subscribe(this)
  }

  connectedCallback() {
    this.render()
  }

  render() {
    if (!this.shadowRoot) return

    this.shadowRoot.innerHTML = ''

    console.log(applicationState)

    applicationState.games.forEach(game => {
      const gameName = this.ownerDocument.createElement('h1')
      gameName.textContent = `${game.id} - ${game.name} - ${game.difficulty}`
      this.shadowRoot?.appendChild(gameName)
    })
  }
}

customElements.define('app-board', Board)