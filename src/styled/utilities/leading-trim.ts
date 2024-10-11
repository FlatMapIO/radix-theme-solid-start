import { cva } from '~/lib/utils'
import leadingTrimStyles from './leading-trim.module.css'

export const leadingTrimVariants = {
  normal: leadingTrimStyles['rt-r-lt-normal'],
  start: leadingTrimStyles['rt-r-lt-start'],
  end: leadingTrimStyles['rt-r-lt-end'],
  both: leadingTrimStyles['rt-r-lt-both'],
} as const
