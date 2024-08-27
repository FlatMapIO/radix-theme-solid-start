import { cva, cx } from '~/lib/utils'
import styles from './tabs.module.css'

export const tabsVariants = {
  root: cva(styles['rt-BaseTabList'], {
    defaultVariants: {
      size: '2',
    },
    variants: {
      highContrast: {
        true: styles['rt-high-contrast'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
      },
    },
  }),
  trigger: cx(['rt-reset', styles['rt-BaseTabListTrigger']]),
  triggerInner: styles['rt-BaseTabListTriggerInner'],
  triggerInnerHidden: styles['rt-BaseTabListTriggerInnerHidden'],

  navItem: styles['rt-TabNavItem'],
  navLink: cx([
    'rt-reset',
    styles['rt-BaseTabListTrigger'],
    styles['rt-TabNavLink'],
  ]),
  content: styles['rt-TabsContent'],
}

export const tabsAttrs = {
  trigger: (props: { state?: 'active' | 'inactive' }) => ({
    'data-state': props.state,
  }),
}
