import { useCallback, useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { find, equals, compose, prop } from 'ramda'

import {
  setTasks as tasks,
  setTaskTimings as timings,
  addTask as add,
  removeTask as remove,
  setActiveTask as active,
  incrementSecond as tick,
} from '../actions'
import { getTasks, getActiveTaskKey } from '../selectors'

export const useTasks = () => {
  const dispatch = useDispatch()

  const tasksList = useSelector(getTasks)
  const activeTaskKey = useSelector(getActiveTaskKey)

  const activeTask = useMemo(() => {
    return find(compose(equals(activeTaskKey), prop('key')), tasksList)
  }, [activeTaskKey, tasksList])

  const getTask = useCallback((id) => find(compose(equals(id), prop('key')), tasksList), [tasksList])

  const setTasks = useCallback(compose(dispatch, tasks), [])
  const setActiveTask = useCallback(compose(dispatch, active), [])
  const setTaskTimings = useCallback(compose(dispatch, timings), [])
  const addTask = useCallback(compose(dispatch, add), [])
  const removeTask = useCallback(compose(dispatch, remove), [])
  const incrementSecond = useCallback(compose(dispatch, tick), [])

  useEffect(() => {
    if (tasksList && !activeTaskKey) {
      setActiveTask(tasksList[0].key)
    }
  }, [tasksList, activeTaskKey])

  return {
    tasks: tasksList,
    activeTask,
    activeTaskKey,
    getTask,
    setTasks,
    setTaskTimings,
    addTask,
    removeTask,
    setActiveTask,
    incrementSecond,
  }
}
