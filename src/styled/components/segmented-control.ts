import { cva, cx } from '~/lib/utils'
import styles from './segmented-control.module.css'

export const segmentedControlVariants = {
  root: cva(styles['rt-SegmentedControlRoot'], {
    variants: {
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
  item: cx(['rt-reset', styles['rt-SegmentedControlItem']]),
  itemLabel: styles['rt-SegmentedControlItemLabel'],
  itemLabelInactive: styles['rt-SegmentedControlItemLabelInactive'],
  itemLabelActive: styles['rt-SegmentedControlItemLabelActive'],
  itemSeparator: styles['rt-SegmentedControlItemSeparator'],
  indicator: styles['rt-SegmentedControlIndicator'],
}

export const segmentedControlAttrs = (props: {
  itemState?: 'on' | 'off'
  focusVisible?: boolean
}) => ({
  item: {
    'data-state': props.itemState,
  },
})
