import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { AuthReducer } from '@vkr/app-auth'
import { NotificationsQueueReducer } from '@vkr/app-notifications'

const persistConfig = {
  key: 'root',
  storage: storage,
  debug: true,
}

export const composeStoreWithModules = (modulesReducers) => {
  const rootReducer = {
    ...modulesReducers,
    auth: AuthReducer,
    notifications: NotificationsQueueReducer,
  }

  return createStore(
    persistReducer(persistConfig, combineReducers(rootReducer)),
    composeWithDevTools(applyMiddleware(thunk)),
  )
}
