import { cva, cx } from '~/lib/utils'
import styles from './text-field.module.css'

export const textFieldVariants = {
  root: cva(styles['rt-TextFieldRoot'], {
    variants: {
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
        soft: styles['rt-variant-soft'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  input: cx(['rt-reset', styles['rt-TextFieldInput']]),
  slot: styles['rt-TextFieldSlot'],
}

export const textFieldAttrs = () => ({
  input: (props: { onePasswordFilled?: boolean }) => ({
    'data-com-onepassword-filled': props.onePasswordFilled ? '' : undefined,
  }),
  slot: (props: { side?: 'left' | 'right'; accentColor?: string }) => ({
    'data-side': props.side,
    'data-accent-color': props.accentColor,
  }),
})
