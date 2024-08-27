import { cva } from '~/lib/utils'
import styles from './link.module.css'

export const linkVariants = cva(['rt-reset', styles['rt-Link']], {
  variants: {
    underline: {
      auto: styles['rt-underline-auto'],
      hover: styles['rt-underline-hover'],
      always: styles['rt-underline-always'],
    },
    highContrast: {
      true: styles['rt-high-contrast'],
    },
  },
})

export const linkAttrs = (props: {
  disabled?: boolean
  accentColor?: string
  state?: 'open'
}) => ({
  'data-disabled': props.disabled ? true : undefined,
  'data-accent-color': props.accentColor,
  'data-state': props.state,
})
