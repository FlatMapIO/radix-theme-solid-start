import styles from './text-wrap.module.css'

export const textWrapVariants = {
  wrap: styles['rt-r-tw-wrap'],
  nowrap: styles['rt-r-tw-nowrap'],
  pretty: styles['rt-r-tw-pretty'],
  balance: styles['rt-r-tw-balance'],
} as const
