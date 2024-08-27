import { cva, cx, type VariantProps } from '~/lib/utils'
import baseCardStyles from './base-card.module.css'
import styles from './radio-cards.module.css'

export const radioCardsVariant = {
  root: cva([styles['rt-RadioCardsRoot']], {
    defaultVariants: {
      size: '2',
      variant: 'surface',
    },
    variants: {
      highContrast: {
        true: styles['rt-high-contrast'],
      },
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  item: cx([
    'rt-reset',
    baseCardStyles['rt-BaseCard'],
    styles['rt-RadioCardsItem'],
  ]),
}

export type RadioCardsVariants = VariantProps<typeof radioCardsVariant.root>

export const radioCardAttrs = (props: { state: 'checked' | 'unchecked' }) => {
  return {
    'data-state': props.state,
  }
}
