import { compose, find, equals, prop } from 'ramda'

import { parseSecondsToDate, parseTimeToSeconds } from '@vkr/app-utils'

import { SET_TASKS, REMOVE_TASK, ADD_TASK, SET_TASK_TIMING, SET_ACTIVE_TASK } from '../reducers'
import { getActiveTaskKey, getTasks } from '../selectors'

export function setTasks(tasks) {
  return { type: SET_TASKS, payload: tasks }
}

export function setActiveTask(taskKey) {
  return { type: SET_ACTIVE_TASK, payload: taskKey }
}

// timing: { id, timing }
export function setTaskTimings(timing) {
  return { type: SET_TASK_TIMING, payload: timing }
}

export function addTask(task) {
  return { type: ADD_TASK, payload: task }
}

export function removeTask(task) {
  return { type: REMOVE_TASK, payload: task }
}

export function incrementSecond() {
  return (dispatch, getState) => {
    const today = '10.06.2021'
    const tasks = compose(getTasks, getState)()
    const activeTaskKey = compose(getActiveTaskKey, getState)()
    const { timings } = find(compose(equals(activeTaskKey), prop('key')))(tasks)
    const { time: todayTime } = find(compose(equals(today), prop('date')))(timings)

    const seconds = parseTimeToSeconds(todayTime)

    const newTime = parseSecondsToDate(seconds + 1)

    const newTimings = timings.map((timing) => (timing.date === today ? { ...timing, time: newTime } : timing))

    dispatch(setTaskTimings({ id: activeTaskKey, timing: newTimings }))
  }
}
