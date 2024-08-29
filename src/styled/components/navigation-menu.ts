import styles from './navigation-menu.module.css'

export const navigationMenuVariants = {
  root: styles.root,
  trigger: styles.trigger,
  triggerIndicator: styles['trigger-indicator'],
  viewport: styles.viewport,
  content: styles.content,
  arrow: styles.arrow,
  content1: styles['content-1'],
  content2: styles['content-2'],
  item: styles.item,
  itemCallout: styles['item-callout'],
  itemLabel: styles['item-label'],
  itemDescription: styles['item-description'],
}
export const navigationMenuAttrs = {
  root: (props: { orientation?: 'horizontal' | 'vertical' }) => ({
    'data-orientation': props.orientation,
  }),
  item: (props: { highlighted?: boolean }) => ({
    'data-highlighted': props.highlighted ? 'true' : undefined,
  }),
  viewport: (props: { expanded?: boolean }) => ({
    'data-expanded': props.expanded ? 'true' : undefined,
  }),
  content: (props: {
    expanded?: boolean
    orientation?: 'horizontal' | 'vertical'
    motion?: 'from-start' | 'from-end' | 'to-start' | 'to-end'
  }) => ({
    'data-expanded': props.expanded ? 'true' : undefined,
    'data-orientation': props.orientation,
    'data-motion': props.motion,
  }),
}
