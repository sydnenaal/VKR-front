import { pathOr } from 'ramda'

export const getTasks = pathOr([], ['tasks', 'tasksList'])
