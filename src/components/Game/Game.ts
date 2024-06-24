import { applicationState, dispatch, subscribe } from '@/store/index'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'

import template from '@/components/Game/Game.template.html'
import styles from '@/components/Game/Game.css'

import { loadCSS } from '@/utils/load-css'
import { GameLayout } from '@/utils/constants'
import { setAttributes } from '@/utils/set-attributes'

import { removeGame } from '@/store/actions'

import { GameStatus } from '@/types/minesweeper'

import TrashIcon from '../../../assets/icons/trash.svg'
import SunglassesEmoji from '../../../assets/icons/sunglasses-emoji.svg'
import HappyEmoji from '../../../assets/icons/happy-emoji.svg'
import AstonishedEmoji from '../../../assets/icons/astonished-emoji.svg'

interface GameAttributes {
  uuid: string;
}

const emojiMapping = {
  [GameStatus.inProgress]: HappyEmoji,
  [GameStatus.lost]: AstonishedEmoji,
  [GameStatus.win]: SunglassesEmoji,
}

export class Game extends HTMLElement {
  uuid: string = ''

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    subscribe(this)
  }

  static get observedAttributes() {
    return ['game-uuid']
  }

  attributeChangedCallback(prop: string, _: unknown, value: string) {
    const changedAttribute = prop.replace('game-', '') as keyof GameAttributes
    this[changedAttribute] = value
    this.render()
  }

  onRemoveClick() {
    dispatch(removeGame(this.uuid))
  }

  render() {
    if (!this.shadowRoot)
      return
    if (!this.shadowRoot?.innerHTML)
      this.shadowRoot.innerHTML = template.replace('[GAME-UUID]', this.uuid)

    loadCSS(this, styles)

    const game = applicationState.games.find(({ uuid }) => uuid === this.uuid)

    if (!game) return

    const gameContainer = getFromShadowById(this, `game-${this.uuid}`)
    if (applicationState.activeGame === game.uuid) {
      gameContainer.classList.add('active')
    } else if (gameContainer.classList.contains('active')){
      gameContainer.classList.add('active')
    }

    const gameName = getFromShadowById(this, 'game-name')
    if (gameName && gameName?.textContent !== game.name)
      gameName.textContent = game.name

    const mineCount = getFromShadowById(this, 'mines-count')
    const currentMines = game.board.mines - game.board.flags
    if (mineCount && !mineCount?.textContent?.includes(currentMines.toString()))
      mineCount.textContent = `Mines: ${currentMines}`

    const gameEmoji = getFromShadowById(this, 'game-emoji')
    if (gameEmoji && gameEmoji?.innerHTML !== emojiMapping[game.status])
      gameEmoji.innerHTML = emojiMapping[game.status]

    const removeButton = getFromShadowById(this, 'remove-button')
    if (removeButton && removeButton?.innerHTML !== TrashIcon) {
      removeButton.innerHTML = TrashIcon
      removeButton.addEventListener('click', () => this.onRemoveClick())
    }

    const tilesContainer = getFromShadowById(this, 'game-tiles')
    if (tilesContainer) {
      tilesContainer.classList.add(`game-tiles-${game.difficulty}`)

      const { rows, cols } = GameLayout[game.difficulty]
      const { activeGame, activeTile } = applicationState

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const tile = game.board.tiles[row][col]
          const isTileActive = activeGame === game.uuid && activeTile?.row === row && activeTile?.col === col

          const rendered =
            tilesContainer.querySelector(`app-game-tile[game-uuid="${game.uuid}"][tile-row="${row}"][tile-col="${col}"]`)
          let tileComponent = rendered || this.ownerDocument.createElement('app-game-tile')

          if (
            tileComponent.getAttribute('game-uuid') !== game.uuid ||
            tileComponent.getAttribute('game-status') !== game.status ||
            tileComponent.getAttribute('tile-mine-count') !== tile.mineCount.toString() ||
            tileComponent.getAttribute('tile-row') !==  tile.row.toString() ||
            tileComponent.getAttribute('tile-col') !== tile.col.toString() ||
            tileComponent.getAttribute('tile-has-flag') !== tile.hasFlag.toString() ||
            tileComponent.getAttribute('tile-is-mine') !== tile.isMine.toString() ||
            tileComponent.getAttribute('tile-is-revealed') !== tile.isRevealed.toString() ||
            tileComponent.getAttribute('tile-is-active') !== isTileActive.toString()
          )
            setAttributes(tileComponent, {
              'game-uuid': game.uuid,
              'game-status': game.status,
              'tile-mine-count': tile.mineCount.toString(),
              'tile-row': tile.row.toString(),
              'tile-col': tile.col.toString(),
              'tile-has-flag': tile.hasFlag.toString(),
              'tile-is-mine': tile.isMine.toString(),
              'tile-is-revealed': tile.isRevealed.toString(),
              'tile-is-active': isTileActive.toString()
            })

          if (!rendered)
            tilesContainer.appendChild(tileComponent)
        }
      }
    }
  }
}

customElements.define('app-game', Game)