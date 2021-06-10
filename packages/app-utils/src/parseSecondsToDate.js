export function parseSecondsToDate(initialSeconds = 0) {
  const hours = Math.trunc(initialSeconds / 3600)
  const minutes = Math.trunc((initialSeconds % 3600) / 60)
  const seconds = Math.trunc((initialSeconds % 3600) % 60)

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
