import { cva } from '~/lib/utils'
import type { AccentColor } from '../tokens/accent-colors'
import { fontWeightVariants } from '../utilities/font-weight'
import { textWrapVariants } from '../utilities/text-wrap'
import { truncateVariants } from '../utilities/truncate'
import styles from './text-element.module.css'

const textVariants = {
  truncate: truncateVariants,
  wrap: textWrapVariants,
}

export const textElementVariants = {
  em: cva(styles['rt-Em'], {
    variants: textVariants,
  }),
  quote: cva(styles['rt-Quote'], {
    variants: textVariants,
  }),
  strong: cva(styles['rt-Strong'], {
    variants: textVariants,
  }),
  blockquote: cva(styles['rt-Blockquote'], {
    variants: {
      ...textVariants,
      weight: fontWeightVariants,
    },
  }),
}

export const textElementAttrs = (props: { accentColor?: AccentColor }) => ({
  'data-accent-color': props.accentColor,
})
