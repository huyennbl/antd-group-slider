const DEFAULT_SEPARATOR = '-'
export function renderRangeInText(
  range,
  text = '',
  separator = DEFAULT_SEPARATOR
) {
  if (!range || range.length !== 2) {
    return text
  }
  const left = range[0]
  const right = range[1]
  return text.replace(/{{range}}/, `${left}${separator}${right}`)
}
