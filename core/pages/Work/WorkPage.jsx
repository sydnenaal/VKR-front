import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ScheduleIcon from '@material-ui/icons/Schedule'

import { Breadcrumbs } from '../../components'

const breadcrumbsSource = [
  { text: 'Main', key: uuidv4() },
  { text: 'Work', key: uuidv4() },
]

export const WorkPage = memo(() => (
  <>
    <Breadcrumbs title="Work page" source={breadcrumbsSource} />
  </>
))

WorkPage.displayName = 'WorkPage'

export const WorkPageMenuItem = {
  component: WorkPage,
  icon: ScheduleIcon,
  route: '/work',
  title: 'Work',
  key: uuidv4(),
}
