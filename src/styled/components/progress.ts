import { cva } from '~/lib/utils'
import styles from './progress.module.css'

export const progressVariants = {
  root: cva(styles['rt-ProgressRoot'], {
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

export const progressAttrs = (props: {
  value?: number
  max?: number
  indeterminate?: boolean
  duration?: `${number}s` | `${number}ms`
}) => ({
  root: {
    style: {
      '--progress-duration': 'value' in props ? undefined : props.duration,
      '--progress-value': 'value' in props ? props.value : undefined,
      '--progress-max': 'max' in props ? props.max : undefined,
    },
  },
  indicator: {
    'data-state': props.indeterminate ? 'indeterminate' : undefined,
  },
})
