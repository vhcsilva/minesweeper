import template from '@/components/Menu/Menu.template.html'
import styles from '@/components/Menu/Menu.css'

import { loadCSS } from '@/utils/load-css'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'
import { addNewGame } from '@/store/actions'
import { Difficulty } from '@/types/minesweeper'
import { dispatch } from '@/store/index'

export class Menu extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open', delegatesFocus: true })
  }

  connectedCallback() {
    this.render()
  }

  onCreateClick() {
    const nameInput = getFromShadowById<HTMLInputElement>(this, 'nameInput')
    const beginnerInput = getFromShadowById<HTMLInputElement>(this, 'beginnerInput')
    const intermediateInput = getFromShadowById<HTMLInputElement>(this, 'intermediateInput')
    const advancedInput = getFromShadowById<HTMLInputElement>(this, 'advancedInput')

    const difficulty =  beginnerInput?.checked && Difficulty.beginner ||
                        intermediateInput?.checked && Difficulty.intermediate ||
                        advancedInput?.checked && Difficulty.advanced ||
                        null

    if (nameInput?.value && difficulty) {
      dispatch(addNewGame(nameInput?.value, difficulty))

      nameInput.value = ''
      beginnerInput.checked = false
      intermediateInput.checked = false
      advancedInput.checked = false
    }
  }

  render() {
    if (!this.shadowRoot) return

    this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    getFromShadowById(this, 'createGameButton')?.addEventListener('click', () => this.onCreateClick())
  }
}

customElements.define('app-menu', Menu)