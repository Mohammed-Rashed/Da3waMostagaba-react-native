import {
    SEND_ATTEMP,
    SEND_SUCCESS,
    SEND_FAILED
  } from '../actions/types';
  
  const INITIAL_STATE = { loading: false, error: '', success: '' }
  
  export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case SEND_ATTEMP:
        return {...INITIAL_STATE, loading: true }
      case SEND_FAILED:
        return {...INITIAL_STATE, loading: false, error: action.error  }
      case SEND_SUCCESS:
        return {...INITIAL_STATE, loading: false, success: action.success }
      default:
        return state;
    }
  }
  