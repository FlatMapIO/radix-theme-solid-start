import { cva } from '~/lib/utils'
import styles from './inset.module.css'

export const insetVariants = cva(styles['rt-Inset'], {
  variants: {
    side: {
      top: styles['rt-r-side-top'],
      bottom: styles['rt-r-side-bottom'],
      left: styles['rt-r-side-left'],
      right: styles['rt-r-side-right'],
      x: styles['rt-r-side-x'],
      y: styles['rt-r-side-y'],
      all: styles['rt-r-side-all'],
    },
  },
})
