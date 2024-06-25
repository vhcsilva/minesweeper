export function getDifferenceInSeconds(from: Date, to: Date) {
  return Math.round((new Date(to).getTime() - new Date(from).getTime()) / 1000)
}

export function getTimeDifference(from: Date, to: Date) {
  const diff = getDifferenceInSeconds(from, to)
  const minutes = Math.floor(diff / 60)
  const seconds = diff - minutes * 60

  return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
}