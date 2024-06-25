import { getTimeDifference } from '@/lib/date'

function startTimer(gameUUID: string, startedAt: Date) {
  const timerComponent = document?.
    querySelector('app-board')?.shadowRoot?.
    querySelector(`app-game[game-uuid="${gameUUID}"]`)?.shadowRoot?.getElementById(`timer-${gameUUID}`)

  if (!timerComponent) return

  const interval = setInterval(() => {
    timerComponent.textContent = getTimeDifference(startedAt, new Date())
  }, 1000)

  localStorage.setItem(`time-${gameUUID}`, interval.toString())
}

function endTimer(gameUUID: string) {
  const interval = localStorage.getItem(`time-${gameUUID}`)
  if (interval)
    clearInterval(interval)
}

export const Timer = {
  startTimer,
  endTimer
}