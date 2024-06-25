import { applicationState, subscribe } from '@/store/index'

import template from '@/components/HighestScore/HighestScore.template.html'
import styles from '@/components/HighestScore/HighestScore.css'

import { getTimeDifference } from '@/lib/date'

import { loadCSS } from '@/utils/load-css'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'

import TrophyIcon from '../../../assets/icons/trophy.svg'

export class HighestScore extends HTMLElement {
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

    const { highestScoreGame } = applicationState
    if (!highestScoreGame) {
      this.shadowRoot.innerHTML = ''
      return
    }

    this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    const trophy = getFromShadowById(this, 'trophy')
    if (trophy)
      trophy.innerHTML = TrophyIcon

    const gameName = getFromShadowById(this, 'game-name')
    if (gameName)
      gameName.textContent = highestScoreGame.game.name

    const gameScore = getFromShadowById(this, 'score')
    if (gameScore)
      gameScore.textContent = getTimeDifference(highestScoreGame.game.startedAt, highestScoreGame.game.finishedAt!)
  }
}

customElements.define('app-highest-score', HighestScore)