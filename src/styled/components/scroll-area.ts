import { cva } from '~/lib/utils'
import styles from './scroll-area.module.css'

export const scrollAreaVariants = {
  root: styles['rt-ScrollAreaRoot'],
  viewport: styles['rt-ScrollAreaViewport'],
  viewportFocusRing: styles['rt-ScrollAreaViewportFocusRing'],
  scrollbar: cva(styles['rt-ScrollAreaScrollbar'], {
    variants: {
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  thumb: styles['rt-ScrollAreaThumb'],
}

export const scrollAreaAttrs = (props: {
  orientation?: 'vertical' | 'horizontal'
  state?: 'visible' | 'hidden'
}) => ({
  scrollbar: {
    'data-orientation': props.orientation,
    'data-state': props.state,
  },
})