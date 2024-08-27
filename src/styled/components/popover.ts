import { cva } from '~/lib/utils'
import styles from './popover.module.css'

export const popoverVariants = cva(styles['rt-PopoverContent'], {
  variants: {
    size: {
      '1': styles['rt-r-size-1'],
      '2': styles['rt-r-size-2'],
      '3': styles['rt-r-size-3'],
      '4': styles['rt-r-size-4'],
    },
  },
})
