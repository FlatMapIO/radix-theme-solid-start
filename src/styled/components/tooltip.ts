import { cva } from '~/lib/utils'
import styles from './tooltip.module.css'

export const tooltipVariants = {
  content: styles['rt-TooltipContent'],
  text: styles['rt-TooltipText'],
  arrow: styles['rt-TooltipArrow'],
}

export const tooltipAttrs = (props: {
  state?: 'delayed-open'
  side?: 'top' | 'bottom' | 'left' | 'right'
}) => ({
  content: {
    'data-state': props.state,
    'data-side': props.side,
  },
})
