import { createStore, combineReducers } from 'redux'
import { Finews } from './finews'
import { Events } from './events'
import { News } from './news'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      finews: Finews,
      events: Events,
      news: News
    })
  )
  return store
}