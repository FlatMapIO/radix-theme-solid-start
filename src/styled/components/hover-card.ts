import { cva, type VariantProps } from '~/lib/utils'
import styles from './hover-card.module.css'

export const hoverCardVariants = {
  content: cva(styles['rt-HoverCardContent'], {
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
}

export type HoverCardContentVariants = VariantProps<
  typeof hoverCardVariants.content
>
