import { cva, cx } from '~/lib/utils'
import styles from './menu.module.css'

export const baseMenuVariants = {
  content: cva(styles['rt-BaseMenuContent'], {
    defaultVariants: {
      size: '2',
      variant: 'solid',
    },
    variants: {
      type: {
        dropdown: styles['rt-DropdownMenuContent'],
        context: styles['rt-ContextMenuContent'],
      },
      variant: {
        solid: styles['rt-variant-solid'],
        soft: styles['rt-variant-soft'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
      },
    },
  }),
  shortcut: styles['rt-BaseMenuShortcut'],
  subTriggerIcon: styles['rt-BaseMenuSubTriggerIcon'],
  item: cx(['rt-reset', styles['rt-BaseMenuItem']]),
  itemIndicator: styles['rt-BaseMenuItemIndicator'],
  label: styles['rt-BaseMenuLabel'],
  separator: styles['rt-BaseMenuSeparator'],
}

export const menuAttrs = (props: {
  highlighted?: boolean
  orientation?: 'vertical' | 'horizontal'
  accentColor?: string
  disabled?: boolean
}) => ({
  root: {
    'data-orientation': props.orientation,
  },
  item: {
    'data-highlighted': props.highlighted ? '' : undefined,
    'data-accent-color': props.accentColor,
    'data-disabled': props.disabled ? '' : undefined,
  },
})
