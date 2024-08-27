import { cva } from '~/lib/utils'
import styles from './select.module.css'

export const selectVariants = {
  trigger: cva(['rt-reset', styles['rt-SelectTrigger']], {
    defaultVariants: {
      variant: 'surface',
    },
    variants: {
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
        soft: styles['rt-variant-soft'],
        ghost: styles['rt-variant-ghost'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  triggerInner: styles['rt-SelectTriggerInner'],
  icon: styles['rt-SelectIcon'],
  content: cva(styles['rt-SelectContent'], {
    defaultVariants: {
      size: '2',
      variant: 'solid',
    },
    variants: {
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
      variant: {
        solid: styles['rt-variant-solid'],
        soft: styles['rt-variant-soft'],
      },
      highContrast: {
        true: styles['rt-high-contrast'],
      },
    },
  }),
  viewport: styles['rt-SelectViewport'],
  item: styles['rt-SelectItem'],
  itemIndicator: styles['rt-SelectItemIndicator'],
  itemIndicatorIcon: styles['rt-SelectItemIndicatorIcon'],
  separator: styles['rt-SelectSeparator'],
  label: styles['rt-SelectLabel'],
}

export const selectAttrs = {
  trigger: (props: {
    disabled?: boolean
    state?: 'open' | 'closed'
    placeholder?: boolean
  }) => ({
    'data-disabled': props.disabled ? true : undefined,
    'data-state': props.state,
    'data-placeholder': props.placeholder ? '' : undefined,
  }),
  content: (props: { side?: string }) => ({
    'data-side': props.side,
  }),
  item: (props: { disabled?: boolean; highlighted?: boolean }) => ({
    'data-disabled': props.disabled ? '' : undefined,
    'data-highlighted': props.highlighted ? '' : undefined,
  }),
}
