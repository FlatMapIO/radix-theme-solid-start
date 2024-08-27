import { cva } from '~/lib/utils'
import styles from './radio.module.css'

export const radioVariants = {
  root: cva(['rt-reset', styles['rt-BaseRadioRoot']], {
    defaultVariants: {
      variant: 'surface',
      size: '2',
    },
    variants: {
      highContrast: {
        true: styles['rt-high-contrast'],
      },
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
        soft: styles['rt-variant-soft'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
}

export const radioAttrs = (props: {
  disabled?: boolean
  checked?: boolean
}) => ({
  'data-disabled': props.disabled ? true : undefined,
  'data-state': props.checked ? 'checked' : 'unchecked',
})
