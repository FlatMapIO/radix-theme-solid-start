import { cva } from '~/lib/utils'
import styles from './skeleton.module.css'

export const skeleton = cva(styles['rt-Skeleton'])

export const skeletonAttrs = (props: { inline?: boolean }) => ({
  'data-inline-skeleton': props.inline ? '' : undefined,
})
