import { cva, VariantProps } from '~/lib/utils'
import styles from './checkbox.module.css'

export const checkboxVariants = {
  root: cva(
    ['rt-reset', styles['rt-BaseCheckboxRoot'], styles['rt-CheckboxRoot']],
    {
      variants: {
        highContrast: {
          true: styles['rt-high-contrast'],
        },
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
    },
  ),
  indicator: styles['rt-BaseCheckboxIndicator'],
}

export type CheckboxVariants = VariantProps<
  (typeof checkboxVariants)['root']
>

export const checkboxAttrs = (props: {
  disabled?: boolean
  state?: 'unchecked' | 'checked' | 'indeterminate'
}) => ({
  'data-disabled': props.disabled ? true : undefined,
  'data-state': props.state,
})
