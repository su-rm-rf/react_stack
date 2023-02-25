import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

import xxReducer from './reducers/index'

const store = configureStore({
  reducer: {
    xx: xxReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
