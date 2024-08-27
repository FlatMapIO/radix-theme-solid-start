import { cva } from '~/lib/utils'
import styles from './slider.module.css'

export const sliderVariants = {
  root: cva(styles['rt-SliderRoot'], {
    defaultVariants: {
      size: '2',
      variant: 'surface',
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
  track: styles['rt-SliderTrack'],
  range: styles['rt-SliderRange'],
  thumb: styles['rt-SliderThumb'],
}

export const sliderAttrs = (props: {
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
}) => ({
  root: {
    'data-disabled': props.disabled ? true : undefined,
    'data-orientation': props.orientation,
  },
  track: {
    'data-disabled': props.disabled ? true : undefined,
    'data-orientation': props.orientation,
  },
  range: {
    'data-orientation': props.orientation,
  },
  thumb: {
    'data-disabled': props.disabled ? true : undefined,
  },
})
