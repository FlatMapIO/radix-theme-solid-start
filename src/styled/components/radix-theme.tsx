import { mergeProps, type JSX } from 'solid-js'
import { isServer } from 'solid-js/web'

import { cx } from '~/lib/utils'
import type { AccentColor, GrayColor } from '~/styled/tokens/accent-colors'
import type { Radius } from '../tokens/radius'

export type ThemeProps = {
  isRoot?: boolean
  accentColor?: AccentColor
  grayColor?: GrayColor
  resolvedGrayColor?: string
  hasBackground?: boolean
  panelBackground?: 'solid' | 'translucent'
  appearance?: 'inherit' | 'light' | 'dark'
  radius?: Radius
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

  if (import.meta.env.DEV) {
    if (!isServer) {
      // https://www.radix-ui.com/themes/playground
      console.log(
        '%c🎨 Customize Radix Theme: %chttps://www.radix-ui.com/themes/playground',
        'color: #00C853; font-weight: bold;',
        'color: #2196F3; text-decoration: underline;',
      )
    }
  }

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
