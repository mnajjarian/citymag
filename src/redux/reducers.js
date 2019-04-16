import { NEWS, FI_NEWS } from '../shared/news'
import { EVENTS } from '../shared/events'


export const initialState = {
  news: NEWS,
  finews: FI_NEWS,
  events: EVENTS
}

export const Reducer = (state = initialState, action) => {
  return state
}