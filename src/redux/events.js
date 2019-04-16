import { EVENTS } from '../shared/events'
import * as ActionTypes from './actionTypes'

export const Events = (state = {
  events: EVENTS,
  bookmarks: []
}, action) => {
  switch (action.type) {
  case ActionTypes.BOOK_MARK:
    let evs = state.events.data.filter(f => f.id === action.data)
    state.bookmarks.concat(evs)
  default:
    return state
  }
}