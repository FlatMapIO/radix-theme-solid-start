import { cva } from '~/lib/utils'
import type { AccentColor } from '../tokens/accent-colors'
import { leadingTrimVariants } from '../utilities/leading-trim'
import styles from './link.module.css'
import { truncateVariants } from '../utilities/truncate'
import { textWrapVariants } from '../utilities/text-wrap'

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
    trim: leadingTrimVariants,
    truncate: truncateVariants,
    wrap: textWrapVariants,
  },
})

export const linkAttrs = (props: {
  disabled?: boolean
  accentColor?: AccentColor
  state?: 'open'
}) => ({
  'data-disabled': props.disabled ? true : undefined,
  'data-accent-color': props.accentColor,
  'data-state': props.state,
})
