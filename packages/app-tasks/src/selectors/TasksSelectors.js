import { pathOr } from 'ramda'

export const getTasks = pathOr([], ['tasks', 'tasksList'])

export const getActiveTaskKey = pathOr([], ['tasks', 'activeTaskKey'])
