import { applicationState, dispatch } from '@/store/index'
import { changeActiveContainer, changeActiveGame, changeActiveTile, placeFlag, revealTile } from '@/store/actions'
import { ApplicationContainers } from '@/types/store'
import { useRevealTile, useToggleFlag } from '@/hooks/store'

export class GlobalShortcutsProvider extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  onTabPressed(e: KeyboardEvent) {
    if (e.key !== 'Tab') return
    e.preventDefault()

    if (applicationState.activeContainer === ApplicationContainers.MENU) {
      const menuComponent = this.ownerDocument.querySelector('app-menu')
      const menuOptions = [
        menuComponent?.shadowRoot?.getElementById('nameInput'),
        menuComponent?.shadowRoot?.getElementById('beginnerInput'),
        menuComponent?.shadowRoot?.getElementById('intermediateInput'),
        menuComponent?.shadowRoot?.getElementById('advancedInput'),
        menuComponent?.shadowRoot?.getElementById('createGameButton')
      ]
      const focusedIndex = menuOptions.findIndex(el => el === menuComponent?.shadowRoot?.activeElement)
      const indexToFocus = focusedIndex < (menuOptions.length - 1) ? focusedIndex + 1 : 0
      menuOptions[indexToFocus]?.focus()
    } else if (applicationState.activeContainer === ApplicationContainers.BOARD) {
      const activeIndex = applicationState.games.findIndex(({ uuid }) => uuid === applicationState.activeGame)
      const newActiveIndex = activeIndex === applicationState.games.length - 1 ? 0 : activeIndex + 1
      dispatch(changeActiveGame(applicationState.games[newActiveIndex].uuid))
    }
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Tab')
      this.onTabPressed(e)
    else if (e.key.includes('Arrow')) {
      e.preventDefault()
      const game = applicationState.games.find(({ uuid }) => uuid === applicationState.activeGame)

      if (!applicationState.activeTile || !game)
        return

      const { row, col } = applicationState.activeTile
      let newRow = row
      let newCol = col

      if (e.key === 'ArrowLeft' && col > 0)
        newCol = col - 1
      else if (e.key === 'ArrowRight' && col < (game.board.cols - 1))
        newCol = col + 1
      else if (e.key === 'ArrowUp' && row > 0)
        newRow = row - 1
      else if (e.key === 'ArrowDown' && row < (game.board.rows - 1))
        newRow = row + 1

      if (newRow !== row || newCol !== col)
        dispatch(changeActiveTile(newRow, newCol))
    } else if (e.key === ' ') {
      const gameUUID = applicationState.activeGame
      const row = applicationState.activeTile?.row
      const col = applicationState.activeTile?.col

      if (!gameUUID || row === undefined || col === undefined)
        return

      if (e.ctrlKey)
        useToggleFlag(gameUUID, row, col)
      else
        useRevealTile(gameUUID, row, col)
    }
  }

  onKeyPress(e: KeyboardEvent) {
    if (e.shiftKey && e.key === "N") {
      e.preventDefault()
      document.querySelector('app-menu')?.shadowRoot?.getElementById('nameInput')?.focus()
      dispatch(changeActiveContainer(ApplicationContainers.MENU))
    } else if (e.shiftKey && e.key === "B") {
      e.preventDefault()
      dispatch(changeActiveContainer(ApplicationContainers.BOARD))
    }
  }

  render() {
    document.addEventListener('keydown', e => this.onKeyDown(e))
    document.addEventListener('keypress', e => this.onKeyPress(e))
  }
}

customElements.define('global-shortcuts-provider', GlobalShortcutsProvider)