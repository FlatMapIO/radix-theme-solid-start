import { cva } from '~/lib/utils'
import styles from './table.module.css'

export const tableVariants = {
  root: cva(styles['rt-TableRoot'], {
    defaultVariants: {
      size: '2',
      variant: 'ghost',
    },
    variants: {
      variant: {
        surface: styles['rt-variant-surface'],
        ghost: styles['rt-variant-ghost'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  table: styles['rt-TableRootTable'],
  header: styles['rt-TableHeader'],
  body: styles['rt-TableBody'],
  row: styles['rt-TableRow'],
  cell: styles['rt-TableCell'],
  columnHeaderCell: styles['rt-TableColumnHeaderCell'],
  rowHeaderCell: styles['rt-TableRowHeaderCell'],
}
