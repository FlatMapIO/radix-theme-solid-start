import { cva } from '~/lib/utils'
import styles from './text.module.css'

export const textVariants = cva(styles['rt-Text'], {
  variants: {
    size: {
      '1': styles['rt-r-size-1'],
      '2': styles['rt-r-size-2'],
      '3': styles['rt-r-size-3'],
      '4': styles['rt-r-size-4'],
      '5': styles['rt-r-size-5'],
      '6': styles['rt-r-size-6'],
      '7': styles['rt-r-size-7'],
      '8': styles['rt-r-size-8'],
      '9': styles['rt-r-size-9'],
    },
    highContrast: {
      true: styles['rt-high-contrast'],
    },
  },
})

export const textAttrs = (props: { accentColor?: string }) => ({
  'data-accent-color': props.accentColor,
})
