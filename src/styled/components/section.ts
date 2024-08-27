import { cva } from '~/lib/utils'
import styles from './section.module.css'

export const sectionVariants = cva(styles['rt-Section'], {
  variants: {
    size: {
      '1': styles['rt-r-size-1'],
      '2': styles['rt-r-size-2'],
      '3': styles['rt-r-size-3'],
      '4': styles['rt-r-size-4'],
    },
  },
})
