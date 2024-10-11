import { cva, type VariantProps } from '~/lib/utils'
import type { AccentColor } from '../tokens/accent-colors'
import type { Radius } from '../tokens/radius'
import styles from './button.module.css'

export const buttonVariants = cva(['rt-reset', styles['rt-BaseButton']], {
  defaultVariants: {
    size: '2',
    variant: 'solid',
    type: 'button',
  },

  variants: {
    type: {
      'icon-button': styles['rt-IconButton'],
      button: styles['rt-Button'],
    },
    highContrast: {
      true: styles['rt-high-contrast'],
    },
    loading: {
      true: styles['rt-loading'],
    },
    variant: {
      classic: styles['rt-variant-classic'],
      solid: styles['rt-variant-solid'],
      soft: styles['rt-variant-soft'],
      ghost: styles['rt-variant-ghost'],
      outline: styles['rt-variant-outline'],
      surface: styles['rt-variant-surface'],
    },
    size: {
      '1': styles['rt-r-size-1'],
      '2': styles['rt-r-size-2'],
      '3': styles['rt-r-size-3'],
      '4': styles['rt-r-size-4'],
    },
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

export const buttonAttrs = (props: {
  disabled?: boolean
  state?: 'open' | 'closed'
  loading?: boolean
  accentColor?: AccentColor
  radius?: Radius
}) => ({
  'data-disabled': props.disabled ? true : undefined,
  'data-state': props.state,
  'data-accent-color': props.accentColor,
  'data-radius': props.radius,
})
