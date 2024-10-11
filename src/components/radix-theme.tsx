import { mergeProps, type JSX } from 'solid-js'

import { cx } from '~/lib/utils'

export type ThemeProps = {
  isRoot?: boolean
  accentColor?:
    | 'gray'
    | 'gold'
    | 'bronze'
    | 'brown'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'tomato'
    | 'red'
    | 'ruby'
    | 'crimson'
    | 'pink'
    | 'plum'
    | 'purple'
    | 'violet'
    | 'iris'
    | 'indigo'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'jade'
    | 'green'
    | 'grass'
    | 'lime'
    | 'mint'
    | 'sky'
  grayColor?: 'auto' | 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand'
  resolvedGrayColor?: string
  hasBackground?: boolean
  panelBackground?: 'solid' | 'translucent'
  appearance?: 'inherit' | 'light' | 'dark'
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full'
  scaling?: '90%' | '95%' | '100%' | '105%' | '110%'
  class?: string
  children?: JSX.Element
}

export const createThemeProps = (props: ThemeProps) => {
  props = mergeProps(
    {
      accentColor: 'gray',
      radius: 'medium',
      scaling: '100%',
      panelBackground: 'translucent',
    } satisfies ThemeProps,
    props,
  )

  return () => ({
    'data-is-root-theme': props.isRoot ? 'true' : 'false',
    'data-accent-color': props.accentColor,
    'data-gray-color': props.resolvedGrayColor,
    'data-has-background': props.hasBackground ? 'true' : 'false',
    'data-panel-background': props.panelBackground,
    'data-radius': props.radius,
    'data-scaling': props.scaling,
  })
}

export const RadixTheme = (props: ThemeProps) => {
  const attrs = createThemeProps(props)
  return (
    <div
      {...props}
      {...attrs()}
      class={cx('radix-themes', props.class)}
      classList={{
        light: props.appearance === 'light',
        dark: props.appearance === 'dark',
      }}
    >
      {props.children}
    </div>
  )
}
