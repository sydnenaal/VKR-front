import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ScheduleIcon from '@material-ui/icons/Schedule'

import { Timer, WeekReports, WeekStatistics } from '../../containers'
import { Breadcrumbs } from '../../components'

const breadcrumbsSource = [
  { text: 'Main', key: uuidv4() },
  { text: 'Timer', key: uuidv4() },
]

export const TimerPage = memo(() => (
  <>
    <Breadcrumbs title="Timer page" source={breadcrumbsSource} />
    <Timer />
    <div style={{ display: 'flex' }}>
      <WeekReports />
      <WeekStatistics />
    </div>
  </>
))

TimerPage.displayName = 'TimerPage'

export const TimerPageMenuItem = {
  component: TimerPage,
  icon: ScheduleIcon,
  route: '/timer',
  title: 'Timer',
  key: uuidv4(),
}
