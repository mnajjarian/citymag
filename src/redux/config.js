import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Finews } from './finews'
import { Events } from './events'
import { News } from './news'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      finews: Finews,
      events: Events,
      news: News
    }),
    applyMiddleware(thunk, logger)
  )
  return store
}