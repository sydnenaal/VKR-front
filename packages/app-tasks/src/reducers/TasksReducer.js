import { v4 as uuidv4 } from 'uuid'
import { clone, map, assoc, equals, filter, prop, compose, append } from 'ramda'

export const REMOVE_TASK = 'tasks/remove_tasks'
export const ADD_TASK = 'tasks/add_tasks'
export const SET_TASK_TIMING = 'tasks/set_task_timing'
export const SET_TASKS = 'tasks/set_tasks'

const mockTasks = [
  { key: uuidv4(), code: 'TMR-3267', title: 'improve timer page', timings: [] },
  { key: uuidv4(), code: 'TMR-3269', title: 'fix timer indicator', timings: [] },
  { key: uuidv4(), code: 'TMR-3251', title: 'add charts', timings: [] },
  { key: uuidv4(), code: 'TMR-3167', title: 'fix inline indicator', timings: [] },
  { key: uuidv4(), code: 'TMR-3169', title: 'integrate timer page', timings: [] },
  { key: uuidv4(), code: 'TMR-3451', title: 'implement timer button', timings: [] },
]

function updateTiming({ id, timing }) {
  return map((task) => (equals(key, id) ? assoc('timing', timing, task) : task))
}

function removeTask(id) {
  return filter(compose(equals(id), prop('key')))
}

const initialState = {
  error: null,
  loading: null,
  tasksList: mockTasks,
}

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
    default:
      return state
  }
}
