import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { find, equals, compose } from 'ramda'

import { setTasks as tasks, setTaskTimings as timings, addTask as add, removeTask as remove } from '../actions'
import { getTasks } from '../selectors'

export const useTasks = () => {
  const dispatch = useDispatch()

  const tasksList = useSelector(getTasks)

  const getTask = useCallback((id) => find(equals(id), tasksList), [tasksList])

  const setTasks = useCallback(compose(dispatch, tasks), [])
  const setTaskTimings = useCallback(compose(dispatch, timings), [])
  const addTask = useCallback(compose(dispatch, add), [])
  const removeTask = useCallback(compose(dispatch, remove), [])

  return { tasks: tasksList, getTask, setTasks, setTaskTimings, addTask, removeTask }
}
