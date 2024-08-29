import { cva } from '~/lib/utils'
import styles from './progress.module.css'

export const progressVariants = {
  root: cva(styles['rt-ProgressRoot'], {
    defaultVariants: {
      variant: 'surface',
      size: '2',
    },
    variants: {
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
      highContrast: {
        true: styles['rt-high-contrast'],
      },
    },
  }),
  indicator: styles['rt-ProgressIndicator'],
}

export const progressAttrs = {
  root: (props: {
    max?: number
    value?: number
    duration?: `${number}s` | `${number}ms`
  }) => ({
    style: {
      '--progress-duration': 'value' in props ? undefined : props.duration,
      '--progress-value': 'value' in props ? props.value : undefined,
      '--progress-max': 'max' in props ? props.max : undefined,
    },
  }),
  indicator: (props: { indeterminate?: boolean }) => ({
    'data-state': props.indeterminate ? 'indeterminate' : undefined,
  }),
}
