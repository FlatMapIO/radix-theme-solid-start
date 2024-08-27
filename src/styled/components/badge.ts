import { cva, type VariantProps } from '~/lib/utils'
import styles from './badge.module.css'

export const badgeVariants = cva(['rt-reset', styles['rt-Badge']], {
  variants: {
    variant: {
      solid: styles['rt-variant-solid'],
      soft: styles['rt-variant-soft'],
      outline: styles['rt-variant-outline'],
    },
    size: {
      '1': styles['rt-r-size-1'],
      '2': styles['rt-r-size-2'],
      '3': styles['rt-r-size-3'],
    },
  },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
