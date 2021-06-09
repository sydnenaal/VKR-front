import React, { memo, useMemo, useState, useCallback } from 'react'

import ExpandIcon from '@material-ui/icons/ChevronRight'
import ProgressBar, { SuccessProgressBar } from '@atlaskit/progress-bar'
import { Collapse } from 'reactstrap'

import { Card } from '../../components'

import {
  TotalWorked,
  WeekDay,
  WeekReportsContainer,
  TimeProgressIndicator,
  Percents,
  WeekDayName,
  IconContainer,
} from './styled'

const DailyStats = memo(({ day, workedHours, rateHours, isWeekend, isCollapsed, onClick }) => {
  const ratio = useMemo(() => {
    if (rateHours === 0) return '- '
    if (workedHours === 0 && rateHours === 0) return 1
    return workedHours / rateHours
  }, [workedHours, rateHours])

  const ratioPercentage = useMemo(() => (ratio !== '- ' ? ratio.toFixed(1) * 100 : ratio), [ratio])

  return (
    <>
      <WeekDay onClick={onClick}>
        <IconContainer isCollapsed={isCollapsed}>
          <ExpandIcon />
        </IconContainer>
        <WeekDayName isWeekend={isWeekend}>{day}</WeekDayName>
        {workedHours}/{rateHours}h
        <TimeProgressIndicator>
          {ratio < 1 && <ProgressBar value={ratio} />}
          {ratio === 1 && <SuccessProgressBar value={1} />}
          {ratio === '- ' && <SuccessProgressBar value={1} />}
        </TimeProgressIndicator>
        <Percents>{ratioPercentage}%</Percents>
      </WeekDay>
      <Collapse isOpen={isCollapsed}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quia! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Fugit fuga recusandae iusto odio voluptas cumque, natus, ratione in ad totam
        blanditiis. Vel, excepturi! Aperiam soluta, ipsum itaque possimus harum placeat.
      </Collapse>
    </>
  )
})

export const WeekReports = memo(({ worked = 22, rate = 40 }) => {
  const [collapsed, setCollapsed] = useState('')

  const handleCollapse = useCallback((day) => () => setCollapsed((current) => (current === day ? '' : day)), [])

  return (
    <Card title="Week reports" width="49%" marginRight="1%">
      <WeekReportsContainer>
        <TotalWorked isLess={worked < rate}>
          Total worked: <span>{worked}h</span>
        </TotalWorked>
        <DailyStats
          onClick={handleCollapse('MON')}
          isCollapsed={collapsed === 'MON'}
          day="MON"
          workedHours={3}
          rateHours={8}
        />
        <DailyStats
          onClick={handleCollapse('TUE')}
          isCollapsed={collapsed === 'TUE'}
          day="TUE"
          workedHours={7}
          rateHours={8}
        />
        <DailyStats
          onClick={handleCollapse('WED')}
          isCollapsed={collapsed === 'WED'}
          day="WED"
          workedHours={5}
          rateHours={8}
        />
        <DailyStats
          onClick={handleCollapse('THU')}
          isCollapsed={collapsed === 'THU'}
          day="THU"
          workedHours={8}
          rateHours={8}
        />
        <DailyStats
          onClick={handleCollapse('FRI')}
          isCollapsed={collapsed === 'FRI'}
          day="FRI"
          workedHours={8}
          rateHours={8}
        />
        <DailyStats
          onClick={handleCollapse('SAT')}
          isCollapsed={collapsed === 'SAT'}
          day="SAT"
          workedHours={0}
          rateHours={0}
          isWeekend
        />
        <DailyStats
          onClick={handleCollapse('SUN')}
          isCollapsed={collapsed === 'SUN'}
          day="SUN"
          workedHours={0}
          rateHours={0}
          isWeekend
        />
      </WeekReportsContainer>
    </Card>
  )
})

WeekReports.displayName = 'WeekTable'
