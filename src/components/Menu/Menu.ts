import template from '@/components/Menu/Menu.template.html'
import styles from '@/components/Menu/Menu.css'

import { loadCSS } from '@/utils/load-css'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'

export class Menu extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  onCreateClick() {
    const name = getFromShadowById<HTMLInputElement>(this, 'nameInput')?.value
    const isBeginnerChecked = !!getFromShadowById<HTMLInputElement>(this, 'beginnerInput')?.checked
    const isIntermediateChecked = !!getFromShadowById<HTMLInputElement>(this, 'intermediateInput')?.checked
    const isAdvancedChecked = !!getFromShadowById<HTMLInputElement>(this, 'advancedInput')?.checked
    const difficulty = isBeginnerChecked && 'beginner' || isIntermediateChecked && 'intermediate' || isAdvancedChecked && 'advanced' || null


  }

  render() {
    if (!this.shadowRoot) return

    this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    getFromShadowById(this, 'createGameButton')?.addEventListener('click', () => this.onCreateClick())
  }
}

customElements.define('app-menu', Menu)