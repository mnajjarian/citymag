import * as ActionTypes from '../redux/actionTypes'

export const Finews = (state = {
  isLoading: true,
  errMess: null,
  finews: []
}, action) => {
  switch (action.type) {
  case ActionTypes.LOADING_FI_NEWS:
    return { ...state, isLoading: true, errMess: null, finews: [] }
  case ActionTypes.ADD_FI_NEWS:
    return { ...state, isLoading: false, errMess: null, finews: action.data }
  case ActionTypes.FAILED_FI_NEWS:
    return { ...state, isLoading: false, errMess: action.data }
  default:
    return state
  }
}