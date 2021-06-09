import 'regenerator-runtime/runtime'

import React, { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import 'bootstrap/dist/css/bootstrap.min.css'

import { PreloaderPage } from './components'
import { composeStoreWithModules } from './store'

const Router = lazy(() => import('./routing'))

function Application() {
  const store = composeStoreWithModules({})
  const persistor = persistStore(store)

  return (
    <StrictMode>
      <Suspense fallback={<PreloaderPage />}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </Suspense>
    </StrictMode>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'))
