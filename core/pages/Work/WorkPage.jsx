import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ScheduleIcon from '@material-ui/icons/Schedule'

import { SchedulerComponent, Breadcrumbs } from '../../components'

import { PageContainer } from './styled'

const breadcrumbsSource = [
  { text: 'Main', key: uuidv4() },
  { text: 'Work', key: uuidv4() },
]

export const WorkPage = memo(() => (
  <PageContainer>
    <Breadcrumbs title="Work schedule" source={breadcrumbsSource} />
    <SchedulerComponent />
  </PageContainer>
))

WorkPage.displayName = 'WorkPage'

export const WorkPageMenuItem = {
  component: WorkPage,
  icon: ScheduleIcon,
  route: '/work',
  title: 'Work',
  key: uuidv4(),
}
