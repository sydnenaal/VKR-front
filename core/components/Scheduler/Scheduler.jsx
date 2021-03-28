import React, { memo } from 'react'
import Paper from '@material-ui/core/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui'

import appointments from './data/today-appointments'

import { useStyles } from './styled'

const TimeTableCell = ({ startDate }) => {
  const { todayCell, weekendCell } = useStyles()
  const date = new Date(startDate)

  if (date.getDate() === new Date().getDate()) {
    return <WeekView.TimeTableCell {...props} className={todayCell} />
  }

  if (date.getDay() === 0 || date.getDay() === 6) {
    return <WeekView.TimeTableCell {...props} className={weekendCell} />
  }

  return <WeekView.TimeTableCell {...props} />
}

const DayScaleCell = ({ startDate, today }) => {
  const { today: todayClass, weekend } = useStyles()

  if (today) {
    return <WeekView.DayScaleCell {...props} className={todayClass} />
  }

  if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...props} className={weekend} />
  }

  return <WeekView.DayScaleCell {...props} />
}

export const SchedulerComponent = memo(() => {
  return (
    <Paper>
      <Scheduler data={appointments} height={660}>
        <ViewState />
        <WeekView
          startDayHour={9}
          endDayHour={19}
          timeTableCellComponent={TimeTableCell}
          dayScaleCellComponent={DayScaleCell}
        />
        <Appointments />
      </Scheduler>
    </Paper>
  )
})

SchedulerComponent.displayName = 'SchedulerComponent'
