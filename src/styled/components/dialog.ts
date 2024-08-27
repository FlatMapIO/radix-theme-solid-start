import { cva, type VariantProps } from '~/lib/utils'
import styles from './dialog.module.css'

export const baseDialogVariants = {
  overlay: styles['rt-BaseDialogOverlay'],
  scroll: styles['rt-BaseDialogScroll'],
  scrollPadding: cva(styles['rt-BaseDialogScrollPadding'], {
    variants: {
      align: {
        start: styles['rt-r-align-start'],
        center: styles['rt-r-align-center'],
      },
    },
  }),
  content: cva(styles['rt-BaseDialogContent'], {
    variants: {
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
        '4': styles['rt-r-size-4'],
      },
    },
  }),
}

export type BaseDialogScrollPaddingVariants = VariantProps<
  typeof baseDialogVariants.scrollPadding
>

export type BaseDialogContentVariants = VariantProps<
  typeof baseDialogVariants.content
>

export const baseDialogAttrs = (props: { state?: 'open' | 'closed' }) => ({
  overlay: {
    'data-state': props.state,
  },
  content: {
    'data-state': props.state,
  },
})
