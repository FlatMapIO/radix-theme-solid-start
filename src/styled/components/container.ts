import { cva, type VariantProps } from '~/lib/utils'
import styles from './container.module.css'

export const containerVariants = {
  root: styles['rt-Container'],
  inner: cva(styles['rt-ContainerInner'], {
    variants: {
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
        '4': styles['rt-r-size-4'],
      },
    },
  }),
}
