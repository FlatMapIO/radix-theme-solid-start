import { cva, cx } from '~/lib/utils'
import styles from './radio-group.module.css'

export const radioGroupVariants = {
  root: styles['rt-RadioGroupRoot'],

  item: styles['rt-RadioGroupItem'],
  itemInner: styles['rt-RadioGroupItemInner'],
  itemRadio: cx('rt-reset', styles['rt-RadioGroupRoot']),
}
