export const accentColors = [
  'gray',
  'gold',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'lime',
  'mint',
  'sky',
] as const

export const grayColors = [
  'auto',
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
] as const

export type AccentColor = (typeof accentColors)[number]
export type GrayColor = (typeof grayColors)[number]
