import { cva, type VariantProps } from '~/lib/utils'
import styles from './callout.module.css'

export const calloutVariants = {
  root: cva(styles['rt-CalloutRoot'], {
    defaultVariants: {
      size: '2',
      variant: 'soft',
    },
    variants: {
      highContrast: {
        true: styles['rt-high-contrast'],
      },
      variant: {
        soft: styles['rt-variant-soft'],
        surface: styles['rt-variant-surface'],
        outline: styles['rt-variant-outline'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  icon: styles['rt-CalloutIcon'],
}

export type CalloutVariants = VariantProps<typeof calloutVariants.root>
