export function parseMilliseconds(milliseconds: number): {
  milliseconds: number
  seconds: number
  minutes: number
} {
  // Calculate the total seconds from milliseconds
  const totalSeconds = Math.floor(milliseconds / 1000)

  // Calculate whole minutes
  const minutes = Math.floor(totalSeconds / 60)

  // Calculate remaining seconds after extracting minutes
  const seconds = totalSeconds % 60

  // Calculate remaining milliseconds
  const remainingMilliseconds = milliseconds % 1000

  return {
    milliseconds: remainingMilliseconds,
    seconds: seconds,
    minutes: minutes,
  }
}
