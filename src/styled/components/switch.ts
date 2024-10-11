import { cva } from '~/lib/utils'
import type { Radius } from '../tokens/radius'
import styles from './switch.module.css'

export const switchVariants = {
  root: cva(['rt-reset', styles['rt-SwitchRoot']], {
    defaultVariants: {
      size: '2',
      variant: 'surface',
    },
    variants: {
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
        soft: styles['rt-variant-soft'],
      },
    },
  }),
  thumb: cva(styles['rt-SwitchThumb'], {
    variants: {
      highContrast: {
        true: styles['rt-high-contrast'],
      },
    },
  }),
}

export const switchAttrs = (props: {
  disabled?: boolean
  checked?: boolean
  radius?: Radius
}) => ({
  root: {
    'data-disabled': props.disabled ? '' : undefined,
    'data-state': props.checked ? 'checked' : 'unchecked',
    'data-radius': props.radius,
  },
})
