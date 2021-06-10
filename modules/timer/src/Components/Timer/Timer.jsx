import React, { memo, useCallback, useEffect, useRef } from 'react'

import { useToggler } from '@vkr/app-hooks'
import { useTasks } from '@vkr/app-tasks'
import { useNotifications } from '@vkr/app-notifications'
import { Card } from '@vkr/app-ui-components'
import { getTodayDate } from '@vkr/app-utils'

import PlayIcon from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'

import {
  TimerSection,
  TaskSection,
  TimerContainer,
  TimerButton,
  Counter,
  StaticButtonContainer,
  Indicator,
  TasksContainer,
  Task,
  TaskDescription,
  TaskTimings,
  TaskTiming,
  TimingDescription,
  TimingTime,
  Divider,
} from './styled'

function getTaskDescription({ code, title }) {
  return `${code}: ${title}`
}

function getTodayTiming(timings) {
  const todayDate = getTodayDate()
  const todayWorked = timings.find(({ date }) => date === todayDate)

  return todayWorked && todayWorked.time
}

function getTotalTimings(timings) {}

export const Timer = memo(() => {
  const [isPlay, playToggle] = useToggler()
  const { tasks, setActiveTask, activeTask, incrementSecond } = useTasks()
  const { initNotificaton } = useNotifications()

  const interval = useRef()

  const handleClickNotification = useCallback((key) => () => {
    isPlay && playToggle()
    setActiveTask(key)
    initNotificaton({ type: 'warning', message: 'Work task has changed' })
  })

  useEffect(() => {
    if (isPlay) {
      interval.current = setInterval(incrementSecond, 1000)
    }

    if (!isPlay) {
      clearInterval(interval.current)
    }

    return () => clearInterval(interval.current)
  }, [isPlay])

  return (
    <Card title="Timer" marginBottom="30px">
      <TimerContainer>
        <TaskSection>{activeTask && getTaskDescription(activeTask)}</TaskSection>
        <TimerSection>
          {isPlay && <Indicator />}
          <Counter>{activeTask ? getTodayTiming(activeTask.timings) : '00:00:00'}</Counter>
          <StaticButtonContainer>
            <TimerButton onClick={playToggle}>
              {isPlay ? <Pause fontSize="large" /> : <PlayIcon fontSize="large" />}
            </TimerButton>
          </StaticButtonContainer>
        </TimerSection>
      </TimerContainer>
      <Divider />
      <TasksContainer>
        {tasks.map(({ key, code, title, timings }) => (
          <Task key={key} active={key === activeTask?.key} onClick={handleClickNotification(key)}>
            <TaskDescription>{getTaskDescription({ code, title })}</TaskDescription>
            <TaskTimings>
              <TaskTiming>
                <TimingDescription>Total</TimingDescription>
                <TimingTime>{getTodayTiming(timings)}</TimingTime>
              </TaskTiming>
              <TaskTiming>
                <TimingDescription>Today</TimingDescription>
                <TimingTime>{getTodayTiming(timings)}</TimingTime>
              </TaskTiming>
            </TaskTimings>
          </Task>
        ))}
      </TasksContainer>
    </Card>
  )
})

Timer.displayName = 'Timer'
