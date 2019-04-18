import * as ActionTypes from './actionTypes'
import { FI_NEWS } from '../shared/news'
import { EVENTS } from '../shared/events'

export const fetchFiNews = () => (dispatch) => {
  dispatch(fiNewsLoading(true))

  setTimeout(() => {
    dispatch(addFiNews(FI_NEWS))
  }, 2000)
}

export const fetchEvents = () => (dispatch) => {
  dispatch(eventsLoading(true))

  setTimeout(() => {
    dispatch(addEvents(EVENTS))
  }, 2000)
}

export const eventsLoading = () => ({
  type: ActionTypes.LOADING_EVENTS
})

export const addEvents = (events) => ({
  type: ActionTypes.ADD_EVENTS,
  data: events.data
})

export const failedEvents = (errmess) => ({
  type: ActionTypes.FAILED_EVENTS,
  data: errmess
})

export const fiNewsLoading = () => ({
  type: ActionTypes.LOADING_FI_NEWS
})

export const addFiNews = (finews) => ({
  type: ActionTypes.ADD_FI_NEWS,
  data: finews.Demo.value
})

export const failedFiNews = (errmess) => ({
  type: ActionTypes.FAILED_FI_NEWS,
  data: errmess
})

export const bookmark = (eventId) => {
  return {
    type: ActionTypes.BOOK_MARK,
    data: eventId
  }
}