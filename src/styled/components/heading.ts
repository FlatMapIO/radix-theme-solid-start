import { cva, type VariantProps } from '~/lib/utils'
import styles from './heading.module.css'

export const headingVariants = cva(styles['rt-Heading'], {
  defaultVariants: {
    size: '6',
  },
  variants: {
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

export type HeadingVariants = VariantProps<typeof headingVariants>

export const headingAttrs = (props: {
  accentColor?: string
  highContrast?: boolean
}) => ({
  'data-accent-color': props.accentColor,
  'data-high-contrast': props.highContrast ? 'true' : undefined,
})
