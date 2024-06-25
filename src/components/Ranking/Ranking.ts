import { applicationState, subscribe } from '@/store/index'

import template from '@/components/Ranking/Ranking.template.html'
import styles from '@/components/Ranking/Ranking.css'

import { loadCSS } from '@/utils/load-css'
import { GameStatus } from '@/types/minesweeper'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'
import { getDifferenceInSeconds, getTimeDifference } from '@/lib/date'

export class Ranking extends HTMLElement {
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

    this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    const wonGames = applicationState.games
      .filter(({ status }) => status === GameStatus.win)
      .sort((game, nextGame) => {
        const diffGame = getDifferenceInSeconds(game.startedAt, game.finishedAt!)
        const diffNextGame = getDifferenceInSeconds(nextGame.startedAt, nextGame.finishedAt!)

        if (diffGame < diffNextGame) return -1
        if (diffNextGame < diffGame) return 1

        return 0
      })

    const rankingList = getFromShadowById(this, 'ranking-list')

    const positions = [0, 1, 2, 3, 4]
    positions.forEach(index => {
      const game = wonGames.at(index)
      const position = index + 1
      const score = game ? getTimeDifference(game.startedAt, game.finishedAt!) : '-'

      rankingList.innerHTML += `
        <li>
          <span class="medal medal-${position}">${position}</span>
          <span>${game?.name || '-'}</span>
          <span>${score}</span>
        </li>
      `
    })
  }
}

customElements.define('app-ranking', Ranking)