function startTimer(gameUUID: string, startedAt: Date) {
  const timerComponent = document?.
    querySelector('app-board')?.shadowRoot?.
    querySelector(`app-game[game-uuid="${gameUUID}"]`)?.shadowRoot?.getElementById(`timer-${gameUUID}`)

  if (!timerComponent) return

  const interval = setInterval(() => {
    const diff = Math.round((new Date().getTime() - startedAt.getTime()) / 1000)
    const minutes = Math.floor(diff / 60)
    const seconds = diff - minutes * 60
    timerComponent.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
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