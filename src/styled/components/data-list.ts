import { cva, type VariantProps } from '~/lib/utils'

import '~/styles/utilities/leading-trim.module.css'

import styles from './data-list.module.css'

export const dataListVariants = {
  root: cva([styles['rt-DataListRoot']], {
    defaultVariants: {
      orientation: 'horizontal',
      size: '2',
      trim: 'normal',
    },
    variants: {
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
      orientation: {
        vertical: styles['rt-r-orientation-vertical'],
        horizontal: styles['rt-r-orientation-horizontal'],
      },
      trim: {
        normal: styles['rt-r-trim-normal'],
        start: styles['rt-r-trim-start'],
        end: styles['rt-r-trim-end'],
        both: styles['rt-r-trim-both'],
      },
    },
  }),
  item: cva(styles['rt-DataListItem'], {
    variants: {
      alignItems: {
        baseline: styles['rt-r-ai-baseline'],
        start: styles['rt-r-ai-start'],
        center: styles['rt-r-ai-center'],
        end: styles['rt-r-ai-end'],
        stretch: styles['rt-r-ai-stretch'],
      },
    },
  }),
  label: styles['rt-DataListLabel'],
  value: styles['rt-DataListValue'],
}

export const dataListAttrs = (props: {
  accentColor?: string
  highContrast?: boolean
}) => ({
  root: {
    'data-accent-color': props.accentColor,
  },
  label: {
    'data-high-contrast': props.highContrast ? 'true' : undefined,
  },
})

export type DataListRootVariants = VariantProps<typeof dataListVariants.root>
export type DataListItemVariants = VariantProps<typeof dataListVariants.item>
