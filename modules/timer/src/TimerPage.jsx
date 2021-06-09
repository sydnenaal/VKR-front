import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Breadcrumbs } from '@vkr/app-ui-components'

import { Timer, WeekReports, WeekStatistics } from './components'

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
