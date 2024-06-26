/**
 * Constanst for historical data fetching.
 *
 */

import { OpUnitType } from 'dayjs'

export const ONE_HOUR_SECONDS = 3600
export const ONE_DAY_SECONDS = 86400

export const TimeWindow: {
  [key: string]: OpUnitType
} = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
}
