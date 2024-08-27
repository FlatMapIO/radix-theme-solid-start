import { cva, VariantProps } from '~/lib/utils'
import styles from './card.module.css'

export const cardVariants = cva(
  ['rt-reset', styles['rt-BaseCard'], styles['rt-Card']],
  {
    defaultVariants: {
      size: '1',
      variant: 'surface',
    },
    variants: {
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
        ghost: styles['rt-variant-ghost'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
        '4': styles['rt-r-size-4'],
        '5': styles['rt-r-size-5'],
      },
    },
  },
)

export type CardVariants = VariantProps<typeof cardVariants>

export const cardAttrs = (props: { state?: 'open' | 'closed' }) => ({
  'data-state': props.state,
})
