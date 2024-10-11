import { cva, type VariantProps } from '~/lib/utils'
import type { AccentColor } from '../tokens/accent-colors'
import type { Radius } from '../tokens/radius'
import styles from './badge.module.css'

export const badgeVariants = cva(['rt-reset', styles['rt-Badge']], {
  defaultVariants: {
    size: '2',
    variant: 'soft',
  },
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

export const badgeAttrs = (props: {
  accentColor?: AccentColor
  radius?: Radius
}) => ({
  'data-accent-color': props.accentColor,
  'data-radius': props.radius,
})
