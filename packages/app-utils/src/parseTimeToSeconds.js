export function parseTimeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(':')

  return Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600
}
