import { cva } from '~/lib/utils'
import type { AccentColor } from '../tokens/accent-colors'
import { fontWeightVariants } from '../utilities/font-weight'
import { leadingTrimVariants } from '../utilities/leading-trim'
import { textAlignVariants } from '../utilities/text-align'
import { textWrapVariants } from '../utilities/text-wrap'
import { truncateVariants } from '../utilities/truncate'
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
    trim: leadingTrimVariants,
    wrap: textWrapVariants,
    weight: fontWeightVariants,
    truncate: truncateVariants,
    align: textAlignVariants,
  },
})

export const textAttrs = (props: { accentColor?: AccentColor }) => ({
  'data-accent-color': props.accentColor,
})
