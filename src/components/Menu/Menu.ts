import template from '@/components/Menu/Menu.template.html'
import styles from '@/components/Menu/Menu.css'

import { loadCSS } from '@/utils/load-css'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'
import { addNewGame, changeActiveContainer, changeSortedBy } from '@/store/actions'
import { Difficulty } from '@/types/minesweeper'
import { applicationState, dispatch } from '@/store/index'
import { ApplicationContainers, SortOptions } from '@/types/store'

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
      dispatch(changeActiveContainer(ApplicationContainers.BOARD))

      nameInput.value = ''
      beginnerInput.checked = false
      intermediateInput.checked = false
      advancedInput.checked = false
    }
  }

  onSortClick(sort: SortOptions) {
    dispatch(changeSortedBy(sort))
  }

  render() {
    if (!this.shadowRoot) return

    this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    getFromShadowById(this, 'createGameButton')?.addEventListener('click', () => this.onCreateClick())

    const sortByNewest = getFromShadowById(this, 'sortByNewest')
    if (sortByNewest) {
      sortByNewest.addEventListener('click', () => this.onSortClick(SortOptions.NEWEST))

      if (applicationState.sortedBy === SortOptions.NEWEST)
        sortByNewest.setAttribute('checked', 'true')
      else
        sortByNewest.removeAttribute('checked')
    }

    const sortByOldest = getFromShadowById(this, 'sortByOldest')
    if (sortByOldest) {
      sortByOldest.addEventListener('click', () => this.onSortClick(SortOptions.OLDEST))

      if (applicationState.sortedBy === SortOptions.OLDEST)
        sortByOldest.setAttribute('checked', 'true')
      else
        sortByOldest.removeAttribute('checked')
    }
  }
}

customElements.define('app-menu', Menu)