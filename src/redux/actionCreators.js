import * as ActionTypes from './actionTypes'

export const bookmark = (eventId) => {
  return {
    type: ActionTypes.BOOK_MARK,
    data: eventId
  }
}