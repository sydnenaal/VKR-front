import { SET_TASKS, REMOVE_TASK, ADD_TASK, SET_TASK_TIMING } from '../reducers'

export function setTasks(tasks) {
  return { type: SET_TASKS, payload: tasks }
}

export function setTaskTimings(timing) {
  return { type: SET_TASK_TIMING, payload: timing }
}

export function addTask(task) {
  return { type: ADD_TASK, payload: task }
}

export function removeTask(task) {
  return { type: REMOVE_TASK, payload: task }
}
