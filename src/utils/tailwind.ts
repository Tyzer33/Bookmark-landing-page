export function twAfter(classes: string | string[]) {
  const cl = typeof classes === 'string' ? classes.split(' ') : classes
  return cl.map((c) => `after:${c}`).join(' ')
}

export function twHover(classes: string | string[]) {
  const cl = typeof classes === 'string' ? classes.split(' ') : classes
  return cl.map((c) => `hover:${c}`).join(' ')
}
