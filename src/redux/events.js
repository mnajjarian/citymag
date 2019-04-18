import * as ActionTypes from './actionTypes'

export const Events = (state = {
  isLoading: true,
  errMess: false,
  events: []
}, action) => {
  switch (action.type) {
  case ActionTypes.LOADING_EVENTS:
    return { ...state, isLoading: true, errMess: null, events: [] }
  case ActionTypes.ADD_EVENTS:
    return { ...state, isLoading: false, errMess: null, events: action.data }
  case ActionTypes.FAILED_EVENTS:
    return { ...state, isLoading: false, errMess: action.data }
  default:
    return state
  }
}