import { cva, type VariantProps } from '~/lib/utils'
import styles from './code.module.css'

export const codeVariants = cva(['rt-reset', styles['rt-Code']], {
  variants: {
    highContrast: {
      true: styles['rt-high-contrast'],
    },
    variant: {
      ghost: styles['rt-variant-ghost'],
      solid: styles['rt-variant-solid'],
      soft: styles['rt-variant-soft'],
      outline: styles['rt-variant-outline'],
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
})

export const codeAttrs = (props: { accentColor?: string }) => ({
  'data-accent-color': props.accentColor,
})

export type CodeVariants = VariantProps<typeof codeVariants>
