import { cva, type VariantProps } from '~/lib/utils'
import styles from './avatar.module.css'
import type { AccentColor } from '../tokens/accent-colors'
import type { Radius } from '../tokens/radius'

export const avatarVariants = {
  root: cva(['rt-reset', styles['rt-AvatarRoot']], {
    defaultVariants: {
      size: '2',
      variant: 'soft',
      letter: 'two',
    },
    variants: {
      letter: {
        one: styles['rt-one-letter'],
        two: styles['rt-two-letters'],
      },
      highContrast: {
        true: styles['rt-high-contrast'],
      },
      variant: {
        solid: styles['rt-variant-solid'],
        soft: styles['rt-variant-soft'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
        '4': styles['rt-r-size-4'],
        '5': styles['rt-r-size-5'],
        '6': styles['rt-r-size-6'],
        '7': styles['rt-r-size-7'],
        '8': styles['rt-r-size-8'],
        '9': styles['rt-r-size-9'],
      },
    },
  }),
  image: styles['rt-AvatarImage'],
  fallback: styles['rt-AvatarFallback'],
}

export type AvatarVariants = VariantProps<typeof avatarVariants.root>

export const avatarAttrs = (props: {
  accentColor?: AccentColor
  radius?: Radius
}) => ({
  'data-accent-color': props.accentColor,
  'data-radius': props.radius,
})
