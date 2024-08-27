import styles from './skeleton.module.css'

export const skeleton = styles['rt-Skeleton']

export const skeletonAttrs = (props: { inline?: boolean }) => ({
  'data-inline-skeleton': props.inline ? '' : undefined,
})
