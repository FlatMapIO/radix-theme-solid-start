import { cva } from '~/lib/utils'
import styles from './spinner.module.css'

export const spinnerVariants = {
  root: cva(styles['rt-Spinner'], {
    defaultVariants: {
      size: '2',
    },
    variants: {
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  leaf: styles['rt-SpinnerLeaf'],
}
