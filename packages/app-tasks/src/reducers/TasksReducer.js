import { clone, map, assoc, equals, filter, prop, compose, append } from 'ramda'

import { mockTasks } from './mockData'

export const REMOVE_TASK = 'tasks/remove_tasks'
export const ADD_TASK = 'tasks/add_tasks'
export const SET_ACTIVE_TASK = 'tasks/set_active_task'
export const SET_TASK_TIMING = 'tasks/set_task_timing'
export const SET_TASKS = 'tasks/set_tasks'

function updateTiming({ id, timing }) {
  console.log(timing)
  return map((task) => (equals(task.key, id) ? assoc('timings', timing, task) : task))
}

function removeTask(id) {
  return filter(compose(equals(id), prop('key')))
}

const initialState = { error: null, loading: null, tasksList: mockTasks, activeTaskKey: null }

export function TasksReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: append(payload)(state.tasksList) }
    case REMOVE_TASK:
      return { ...state, taskList: removeTask(payload)(stats.taskList) }
    case SET_TASK_TIMING:
      return { ...state, tasksList: updateTiming(payload)(state.tasksList) }
    case SET_TASKS:
      return { ...state, tasksList: clone(payload) }
    case SET_ACTIVE_TASK:
      return { ...state, activeTaskKey: payload }
    default:
      return state
  }
}
