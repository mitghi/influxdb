import {get} from 'lodash'

import {AppState, View, Check, ViewType, TimeRange} from 'src/types'

// Constants
import {DEFAULT_TIME_RANGE} from 'src/shared/constants/timeRanges'

export const getTimeRange = (state: AppState, contextID: string): TimeRange => {
  return state.ranges[contextID] || DEFAULT_TIME_RANGE
}

export const getCheckForView = (
  state: AppState,
  view: View
): Partial<Check> => {
  const viewType: ViewType = get(view, 'properties.type')
  const checkID = get(view, 'properties.checkID')

  return viewType === 'check' ? state.resources.checks.byID[checkID] : null
}
